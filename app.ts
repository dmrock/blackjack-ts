import Deck from './deck';
import { ICard } from './types';
import { getBet, getHandValue, getStrHand } from './utils';

function playerTurn(playerHand: ICard[], deck: Deck): number {}

function dealerTurn(dealerHand: ICard[], deck: Deck): number {}

const deck = new Deck();

let dealerHand: ICard[] = [];
let playerHand: ICard[] = [];
let balance = 100;

while (balance > 0) {
  console.log(`Your balance: $${balance}`);
  const bet = getBet(balance);
  balance -= bet;

  // Deal the cards
  deck.reset();
  playerHand = deck.deal(2);
  dealerHand = deck.deal(2);

  const playerValue = getHandValue(playerHand);
  const dealerValue = getHandValue(dealerHand);

  console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${playerValue})`);
  console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);

  if (playerValue === 21) {
    console.log(`Blackjack! You won $${bet * 2.5}`);
    balance += bet * 2.5;
    continue;
  } else if (dealerValue === 21) {
    console.log(`Dealer's hand: ${getStrHand(dealerHand)}. Dealer has blackjack. You lose.`);
    continue;
  }
}
