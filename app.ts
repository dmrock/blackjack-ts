import Deck from './deck';
import { ICard } from './types';
import { getBet, getDecision, getHandValue, getStrHand } from './utils';

function playerTurn(playerHand: ICard[], deck: Deck): number {
  let handValue = getHandValue(playerHand);

  while (true) {
    const action = getDecision();
    if (action !== 'hit') return handValue;

    playerHand.push(deck.deal(1)[0]);
    handValue = getHandValue(playerHand);
    console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${handValue})`);

    if (handValue > 21) {
      return handValue;
    }
  }
}

function dealerTurn(dealerHand: ICard[], deck: Deck): number {
  let handValue = getHandValue(dealerHand);

  while (true) {
    console.log(`Dealer's hand: ${getStrHand(dealerHand)} (Total: ${handValue})`);
    if (handValue >= 17) return handValue;

    dealerHand.push(deck.deal(1)[0]);
    handValue = getHandValue(dealerHand);
  }
}

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

  const playerFinalValue = playerTurn(playerHand, deck);
  if (playerFinalValue > 21) {
    console.log('You busted! Dealer wins.');
    continue;
  }

  const dealerFinalValue = dealerTurn(dealerHand, deck);
  if (dealerFinalValue > 21 || dealerFinalValue < playerFinalValue) {
    console.log(`You won $${bet * 2}`);
    balance += bet * 2;
  } else if (dealerFinalValue === playerFinalValue) {
    console.log('Push! You get your bet back.');
    balance += bet;
  } else {
    console.log(`Dealer wins with ${dealerFinalValue}. You lose your bet.`);
  }
}

console.log('Game over! Thanks for playing.');
