function generateField() {
    const SIZE = 8;
    const field = [];

    // Generate field
    for (let y = 0; y < SIZE; y++) {
        const row = [];

        for (let x = 0; x < SIZE; x++) {
            // 30% chance of a hole
            row.push(Math.random() < 0.3 ? "#" : ".");
        }

        field.push(row);
    }

    // Pick a random position for the player
    let playerX = Math.floor(Math.random() * SIZE);
    let playerY = Math.floor(Math.random() * SIZE);

    // Make sure player's position is a path
    field[playerY][playerX] = "P";

    return field;
}

// Generate and print
const field = generateField();

console.log(
    field.map(row => row.join(" ")).join("\n")
);
