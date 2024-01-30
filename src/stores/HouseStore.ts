import { makeAutoObservable, runInAction } from "mobx";

class HouseStore {
  cards = [];
  favorites = [];
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
    this.loadFavoritesFromLocalStorage();
  }

  setCards(cards) {
    runInAction(() => {
      this.cards = cards
        .map((card) => ({
          ...card,
          id: card.url.split("/").pop(),
          isFavorite: this.isFavorite(card.url.split("/").pop()),
        }))
        .filter(
          (card, index, self) =>
            index === self.findIndex((c) => c.id === card.id)
        );
    });
  }

  addToFavorites(card) {
    const existingCard = this.favorites.find((c) => c.id === card.id);
    if (!existingCard) {
      runInAction(() => {
        this.favorites.push(card);
        this.saveFavoritesToLocalStorage();
      });
    }
  }

  isFavorite(id) {
    return this.favorites.some((card) => card.id === id);
  }

  toggleFavorite(id) {
    const card = this.cards.find((card) => card.id === id);
    if (card) {
      if (this.isFavorite(id)) {
        this.removeFromFavorites(id);
      } else {
        this.addToFavorites(card);
      }
    }
  }

  removeFromFavorites(id) {
    const index = this.favorites.findIndex((card) => card.id === id);
    if (index !== -1) {
      runInAction(() => {
        this.favorites.splice(index, 1);
        this.saveFavoritesToLocalStorage();
      });
    }
  }

  saveFavoritesToLocalStorage() {
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  loadFavoritesFromLocalStorage() {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      runInAction(() => {
        this.favorites = JSON.parse(favorites);
      });
    }
  }
}

export const houseStore = new HouseStore();