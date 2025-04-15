import { ICard } from './types';
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function getDecision(): 'hit' | 'stand' {}

export function getHandValue(cards: ICard[]): number {}

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
