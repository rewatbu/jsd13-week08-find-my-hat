function generateField() {
    const SIZE = 8;
    const field = Array.from(
        { length: SIZE },
        () => Array(SIZE).fill("#")
    );

    // Random starting position
    let x = Math.floor(Math.random() * SIZE);
    let y = Math.floor(Math.random() * SIZE);

    const playerX = x;
    const playerY = y;

    // Carve a connected path
    for (let i = 0; i < 35; i++) {
        field[y][x] = ".";

        const directions = [
            [0, -1], // up
            [0, 1],  // down
            [-1, 0], // left
            [1, 0]   // right
        ];

        const [dx, dy] =
            directions[Math.floor(Math.random() * directions.length)];

        x = Math.max(0, Math.min(SIZE - 1, x + dx));
        y = Math.max(0, Math.min(SIZE - 1, y + dy));
    }

    // Add some random paths
    for (let y = 0; y < SIZE; y++) {
        for (let x = 0; x < SIZE; x++) {
            if (field[y][x] === "#" && Math.random() < 0.25) {
                field[y][x] = ".";
            }
        }
    }

    // Place player
    field[playerY][playerX] = "P";

    return field;
}

const field = generateField();

console.log(
    field.map(row => row.join(" ")).join("\n")
);
