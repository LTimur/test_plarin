import { makeAutoObservable } from "mobx";

class HouseStore {
  cards = [];
  favorites = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCards(cards) {
    this.cards = cards.map((card) => ({
      ...card,
      id: card.url.split("/").pop(),
    }));
  }

  addToFavorites(card) {
    const existingCard = this.favorites.find((c) => c.id === card.id);
    if (!existingCard) {
      this.favorites.push(card);
    }
  }
}

export const houseStore = new HouseStore();