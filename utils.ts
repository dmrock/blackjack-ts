import { ICard } from './types';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function getDecision(): 'hit' | 'stand' {
  while (true) {
    const decision = prompt('Do you want to hit or stand? (h/s): ').toLowerCase();
    if (decision === 'hit' || decision === 'h') {
      return 'hit';
    } else if (decision === 'stand' || decision === 's') {
      return 'stand';
    } else {
      console.log('Invalid input. Please enter "h" or "hit" for hit, "s" or "stand" for stand.');
    }
  }
}

export function getHandValue(cards: ICard[]): number {
  let value = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.value === 1) {
      aces++;
      continue;
    }
    value += Math.min(card.value, 10);
  }

  if ((aces = 0)) {
    return value;
  } else if (value >= 11) {
    return value + aces;
  } else {
    return value + 11 + aces - 1;
  }
}

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getBet(balance: number): number {
  while (true) {
    const bet = parseFloat(prompt(`Enter your bet (max $${balance}): `));
    if (!isNaN(bet) && bet > 0 && bet <= balance) {
      return bet;
    } else {
      console.log(`Invalid bet. Please enter a number between 1 and ${balance}.`);
    }
  }
}

export function getStrHand(hand: ICard[], hideSecondCard: boolean = false): string {
  let str = '';

  for (const [idx, card] of hand.entries()) {
    if (idx !== 0) str += ', ';
    if (idx === 1 && hideSecondCard) {
      str += '[hidden]';
      break;
    }
    str += `${card.getName()}${card.suit} `;
  }
  return str;
}
