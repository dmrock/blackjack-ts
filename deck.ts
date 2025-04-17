import Card from './card';
import { IDeal, Suit } from './types';
import { shuffleArray } from './utils';

class Deck implements IDeal {
  private deck: Card[] = [];

  constructor() {
    this.reset();
  }

  reset() {
    this.deck = [];

    // Create a new deck of cards
    for (let suit in Suit) {
      for (let value = 1; value <= 13; value++) {
        this.deck.push(new Card(value, Suit[suit as keyof typeof Suit]));
      }
    }

    // Shuffle the deck
    shuffleArray(this.deck);
  }

  deal(num: number): Card[] {
    const cards: Card[] = [];

    for (let i = 0; i < num; i++) {
      const card = this.deck.pop();
      if (card) {
        cards.push(card);
      }
    }

    return cards;
  }
}

export default Deck;
