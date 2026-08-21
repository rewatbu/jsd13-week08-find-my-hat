// This is a Find My Hat app

console.log("Welcome to 'Find My ^ Hat'");
console.log("press 'w,a,s,d' to move and 'q' to quit");

const winMessage = "🎉 You found the hat! You win!";
const holeMessage = "💀 You fell into a hole! Game over.";
const outboundMessage = "🚫 You went out of bounds! Game over.";

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
    this.playerLocation = {
      x: 0,
      y: 0,
    };
  }

  printField() {
    console.log(this.field.map((row) => row.join("")).join("\n"));
  }
}

const field = new Field([
  ["*", "░", "░"],
  ["░", "░", "░"],
  ["░", "░", "^"],
]);

field.printField();

function move() {
  const readline = require("readline");

  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  input.question("press w,a,s,d or q to quit: ", (keyinput) => {
    let k = keyinput;

    let newX = field.playerLocation.x;
    let newY = field.playerLocation.y;

    if (k === "w") {
      newY--;
    } else if (k === "a") {
      newX--;
    } else if (k === "s") {
      newY++;
    } else if (k === "d") {
      newX++;
    }

    if (
      newX < 0 ||
      newY < 0 ||
      newY >= field.field.length ||
      newX >= field.field[0].length
    ) {
      console.log(outboundMessage);
      input.close();
      return;
    }

    const destination = field.field[newY][newX];

    if (destination === hat) {
      console.log(winMessage);
      input.close();
      return;
    }

    if (destination === hole) {
      console.log(holeMessage);
      input.close();
      return;
    }

    field.field[field.playerLocation.y][field.playerLocation.x] = fieldCharacter;

    field.playerLocation.x = newX;
    field.playerLocation.y = newY;

    field.field[field.playerLocation.y][field.playerLocation.x] = pathCharacter;

    if (k === "q") {
      console.log("Goodbye! Have a nice day.");
      input.close();
      return;
    }

    input.close();

    console.clear();
    field.printField();
    move();
  });
}

move();
