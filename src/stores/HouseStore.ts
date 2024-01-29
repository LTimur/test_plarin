import { makeAutoObservable } from "mobx";

class HouseStore {
  cards = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCards(cards) {
    this.cards = cards.map((card) => ({
      ...card,
      id: card.url.split("/").pop(),
    }));
  }
}

export const houseStore = new HouseStore();
