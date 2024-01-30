import { makeAutoObservable, runInAction } from "mobx";

class HouseStore {
  cards = [];
  favorites = [];
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCards(cards) {
    runInAction(() => {
      this.cards = cards
        .map((card) => ({
          ...card,
          id: card.url.split("/").pop(),
          isFavorite: false,
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
      this.favorites.splice(index, 1);
    }
  }
}

export const houseStore = new HouseStore();
