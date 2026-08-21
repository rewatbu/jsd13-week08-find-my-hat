// This is a Find My Hat app

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const winMessage = "🎉 You found the hat! You win!";
const holeMessage = "💀 You fell into a hole! Game over.";
const outboundMessage = "🚫 You went out of bounds! Game over.";

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(height = 10, width = 10, holePercentage = 20) {
    this.height = height;
    this.width = width;
    this.holePercentage = holePercentage;
    this.playerLocation = {
      x: 0,
      y: 0,
    };
    this.field = this.generateField();
  }

  generateField() {
    const field = [];

    for (let y = 0; y < this.height; y++) {
        const row = [];

        for (let x = 0; x < this.width; x++) {
            row.push(fieldCharacter);
        }

        field.push(row);
    }

    // Player starting position
    field[0][0] = pathCharacter;

    // Random holes location
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            // not at a starting position
            if (x === 0 && y === 0) {
                continue;
            }

            if (Math.random() * 100 < this.holePercentage) {
                field[y][x] = hole;
            }
        }
    }

    let hatX;
    let hatY;

    do {
        hatX = Math.floor(Math.random() * this.width);
        hatY = Math.floor(Math.random() * this.height);
    } while (
        (hatX === 0 && hatY === 0) ||
        field[hatY][hatX] === hole
    );

    field[hatY][hatX] = hat;

    return field;
  } 

  printField() {
    console.log(this.field.map((row) => row.join("")).join("\n"));
  }
}

// const field = new Field([
//   ["*", "░", "░"],
//   ["░", "░", "░"],
//   ["░", "░", "^"],
// ]);

const field = new Field();

field.printField();

function move() {
  input.question("\npress w,a,s,d or q to quit: ", (keyinput) => {
    const k = keyinput.toLowerCase().trim();
      
    if (k === "q") {
    console.log("Goodbye! Have a nice day.");
    input.close();
    return;
    }

    if (!["w", "a", "s", "d"].includes(k)) {
        console.log("Please enter w, a, s, d, or q!");
        move()
        return;
    }
      
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

    console.clear();
    field.printField();
    move();
  });
}

move();
