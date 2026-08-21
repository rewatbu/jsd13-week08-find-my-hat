function generateMap(width, height, holeChance = 0.25) {
    const field = Array.from({ length: height }, () =>
        Array(width).fill("#")
    );

    // Start player somewhere random
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    let playerX = x;
    let playerY = y;

    // Create a random connected path
    const steps = width * height;

    for (let i = 0; i < steps; i++) {
        field[y][x] = field[y][x] === "P" ? "P" : ".";

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        const [dx, dy] =
            directions[Math.floor(Math.random() * directions.length)];

        x = Math.max(0, Math.min(width - 1, x + dx));
        y = Math.max(0, Math.min(height - 1, y + dy));

        field[y][x] = ".";
    }

    // Add some extra random paths
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (field[row][col] === "#" && Math.random() > holeChance) {
                field[row][col] = ".";
            }
        }
    }

    field[playerY][playerX] = "P";

    return field;
}

const map = generateMap(20, 10, 0.35);

console.log(
    map.map(row => row.join(" ")).join("\n")
);
