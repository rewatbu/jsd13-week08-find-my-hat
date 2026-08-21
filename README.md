# jsd13-week08-find-my-hat

# Find My Hat 🎩

A simple terminal-based JavaScript game where you control a character and try to find the hidden hat without falling into a hole or leaving the field.

## Main Programming Concepts
This project demonstrates several important JavaScript and Node.js concepts:
* Classes
* Constructors
* Arrays
* Nested arrays
* Objects
* Loops
* Conditional statements
* Random number generation
* Event listeners
* Node.js terminal input
* State management
* Coordinate systems

## The Field Class
* The game uses a Field class to manage the game board, to set the size of the field, the roughly amount of holes, the player location, and a hat location on the field.

* The game set the player at the starting position (x=0, y=0), and random the hat and holes.

* The player position decides the flow and logic of the game.

## The move() function
* The move() function constrols the location of the player character.
* Check if player moving into the hole or out of the field, if then the game ends.
* The field/map will be updated every time the player move to a new position.

## The input key
* The program use node.js built-in module to prompt users for input.
* The move() function will check if the keypressed is valid

## Limitation
Because holes are generated randomly, there is a possibility that the hat becomes impossible to reach.
The improvement would be to generate the field in a way that guarantees at least one valid path from the player to the hat.

## Future Improvements
* Use raw mode to allows the program to receive individual keypresses immediately.
* Generate fields dynamically.
* Randomly place the hat.
* Randomly place holes.
* Allow different field sizes.
* Add difficulty levels.
* Improve terminal rendering.
* Add a guaranteed path from the player to the hat.
* Add tests for movement and game conditions.


## 🎮 How to Play

Run the game with Node.js:

`node main.js`

Use the following keys to move:

* w — Move up
* a — Move left
* s — Move down
* d — Move right
* q — Quit the game

Your character is represented by *.

Your goal is to reach the hat:

`^`


Avoid holes:

`O`


and don't move outside the field.

## 🗺️ Game Characters
* "*" Player's current position
* "^" Hat
* "O" Hole
* "░" Open field

## 🏆 Game Conditions

You win when you reach the hat:

`🎉 You found the hat! You win!`


You lose if you fall into a hole:

`💀 You fell into a hole! Game over.`


You also lose if you move outside the field:

`🚫 You went out of bounds! Game over.`

## 🛠️ Technologies
* JavaScript
* Node.js
* Node.js readline module

## 📌 Current Field

The current test field is a small 3×3 grid:
```
*░░
░░░
░░^
```

The player starts at the top-left corner and the hat is at the bottom-right corner.
