# Tenzies Game - React Project

This project is a simple implementation of the Tenzies game using React. The goal of the game is to roll dice and try to get all of them to show the same number. You can lock dice in place as you roll, and the game ends when all the dice show the same value. This project is built to help beginners learn and practice React concepts like state management, event handling, and conditional rendering.

## Game overview

You start with 10 dice rolled at random.
You can "hold" a die by clicking on it, which will prevent it from being rolled in the next turn.
The goal is to get all the dice to show the same value.
The game ends when all 10 dice are the same value.

## Features

Roll Dice: The dice will roll to random values unless they are held.
Hold Dice: Clicking on a die will toggle its "held" state, preventing it from being rolled again.
Game Completion: The game ends when all dice are the same value and locked in place.
Start New Game: After completing a game, you can start a new game by clicking the roll button.
Screenshots

## Technologies Used 

React: JavaScript library for building user interfaces.
useState and useEffect: React hooks for managing state and side effects.
CSS: For styling the application.

## How to Play

Roll Dice: When the game starts, 10 dice will be rolled randomly.
Hold Dice: Click on a die to hold it in place. You can hold as many dice as you like.
Re-roll: Click on the "Roll" button to re-roll the dice that are not held.
Winning: The game ends when all dice are the same number. When this happens, the game will display a "Congratulations" message.
Start New Game: After winning, you can start a new game by clicking the "Roll" button.
 
## How to Contribute

Fork the repository
Create a new branch (git checkout -b feature-name)
Make your changes and commit them (git commit -m 'Add some feature')
Push to the branch (git push origin feature-name)
Open a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)