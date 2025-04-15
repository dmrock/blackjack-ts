export enum Suit {
  Hearts = '♥',
  Diamonds = '♦',
  Clubs = '♣',
  Spades = '♠',
}

export interface ICard {
  value: number;
  suit: Suit;
  getName(): string;
}

export interface IDeal {
  deal(num: number): ICard[];
  reset(): void;
}
