export enum Suit {
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Clubs = 'Clubs',
  Spades = 'Spades',
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
