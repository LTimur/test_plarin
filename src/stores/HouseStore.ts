import { makeAutoObservable } from "mobx";

class HouseStore {
  cards = [];
  favorites = [];
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCards(cards) {
    this.cards = cards.map((card) => ({
      ...card,
      id: card.url.split("/").pop(),
    })).filter((card, index, self) =>
      index === self.findIndex((c) => c.id === card.id)
    );
  }

  addToFavorites(card) {
    const existingCard = this.favorites.find((c) => c.id === card.id);
    if (!existingCard) {
      this.favorites.push(card);
    }
  }
}

export const houseStore = new HouseStore();