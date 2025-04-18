import { ICard } from './types';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function getDecision(): 'hit' | 'stand' {
  while (true) {
    const decision = prompt('Do you want to hit or stand?: ').toLowerCase();
    if (decision === 'hit' || decision === 'stand') {
      return decision as 'hit' | 'stand';
    } else {
      console.log('Invalid input. Please enter "hit" or "stand".');
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

export function getBet(balance: number): number {}

export function getStrHand(hand: ICard[], hideSecondCard: boolean = true): string {}
