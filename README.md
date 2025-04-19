# Blackjack Game

A simple command-line Blackjack game written in TypeScript.

## Installation

1. Make sure you have Node.js installed on your computer
2. Clone this repository
3. Install dependencies:

```
npm install
```

4. Compile TypeScript to JavaScript:

```
npx tsc
```

## How to Run

Start the game with:

```
node dist/index.js
```

## How to Play

### Game Rules

- The goal is to get a hand value as close to 21 as possible without going over
- Number cards are worth their face value
- Face cards (Jack, Queen, King) are worth 10
- Aces are worth 1 or 11, whichever is better for your hand
- If you go over 21, you "bust" and lose the game

### Game Controls

1. At the start of the game, you'll be dealt two cards
2. During your turn, type:
   - `h` or `hit` to draw another card
   - `s` or `stand` to end your turn and let the dealer play
3. After you stand, the dealer will play according to standard rules (must hit until 17 or higher)
4. The game will determine the winner based on who has the higher score without busting

## Enjoy the game!
