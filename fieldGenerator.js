function generateField(width, height, holeChance = 0.25) {
    const field = [];

    // Create the random field
    for (let y = 0; y < height; y++) {
        const row = [];

        for (let x = 0; x < width; x++) {
            row.push(Math.random() < holeChance ? "#" : ".");
        }

        field.push(row);
    }

    // Find all available paths
    const paths = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (field[y][x] === ".") {
                paths.push({ x, y });
            }
        }
    }

    // Make sure there is at least one path
    if (paths.length === 0) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        field[y][x] = ".";
        paths.push({ x, y });
    }

    // Randomly place the player on a path
    const player = paths[Math.floor(Math.random() * paths.length)];
    field[player.y][player.x] = "P";

    return field;
}

// Example
const field = generateField(10, 8, 0.3);

console.log(
    field.map(row => row.join(" ")).join("\n")
);
