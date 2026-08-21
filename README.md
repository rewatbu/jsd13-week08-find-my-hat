# jsd13-week08-find-my-hat

# Find My Hat 🎩

A simple terminal-based JavaScript game where you control a character and try to find the hidden hat without falling into a hole or leaving the field.

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

🗺️ Game Characters
Character	Meaning
*	Player's current position
^	Hat
O	Hole
░	Open field
🏆 Game Conditions

You win when you reach the hat:

🎉 You found the hat! You win!


You lose if you fall into a hole:

💀 You fell into a hole! Game over.


You also lose if you move outside the field:

🚫 You went out of bounds! Game over.

🛠️ Technologies
JavaScript
Node.js
Node.js readline module
📌 Current Field

The current test field is a small 3×3 grid:

*░░
░░░
░░^


The player starts at the top-left corner and the hat is at the bottom-right corner.

🚧 Future Improvements
Generate fields dynamically.
Randomly place the hat.
Randomly place holes.
Allow different field sizes.
Add difficulty levels.
Improve terminal rendering.
Add a guaranteed path from the player to the hat.
Add tests for movement and game conditions.
📚 Project Goal

This project is designed to practice JavaScript concepts including:

Classes
Objects
Arrays
2D arrays
Conditional logic
Functions
User input
Node.js
Basic game-state management