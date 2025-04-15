import Card from './card';
import { IDeal, Suit } from './types';
import { shuffleArray } from './utils';

class Deck implements IDeal {
  private deck: Card[] = [];
  reset() {}
  deal(num: number): Card[] {}
}

export default Deck;
