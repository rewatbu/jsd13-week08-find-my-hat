// class Field {
//     constructor() {
//         this.SIZE = 8;
//         this.HAT_COUNT = 1;
//         this.HOLE_CHANCE = 0.3;

//         this.grid = [];
//         this.generate();
//     }

//     generate() {
//         // Generate 8x8 field
//         for (let y = 0; y < this.SIZE; y++) {
//             const row = [];

//             for (let x = 0; x < this.SIZE; x++) {
//                 row.push(
//                     Math.random() < this.HOLE_CHANCE
//                         ? "#"
//                         : "."
//                 );
//             }

//             this.grid.push(row);
//         }

//         // Add player
//         let playerX;
//         let playerY;

//         do {
//             playerX = Math.floor(Math.random() * this.SIZE);
//             playerY = Math.floor(Math.random() * this.SIZE);
//         } while (this.grid[playerY][playerX] !== ".");

//         this.grid[playerY][playerX] = "P";

//         // Add hats
//         for (let i = 0; i < this.HAT_COUNT; i++) {
//             let hatX;
//             let hatY;

//             do {
//                 hatX = Math.floor(Math.random() * this.SIZE);
//                 hatY = Math.floor(Math.random() * this.SIZE);
//             } while (this.grid[hatY][hatX] !== ".");

//             this.grid[hatY][hatX] = "^";
//         }
//     }

//     printField() {
//         console.log(
//             this.grid
//                 .map(row => row.join(" "))
//                 .join("\n")
//         );
//     }
// }

// // Create field
// const field = new Field();

// // Print field
// field.printField();


// this version fixed isolated hat
class Field {
    constructor() {
        this.SIZE = 8;
        this.HAT_COUNT = 1;
        this.HOLE_CHANCE = 0.4;

        this.grid = [];

        this.generate();
    }

    generate() {
        // Start with all holes
        this.grid = Array.from(
            { length: this.SIZE },
            () => Array(this.SIZE).fill("#")
        );

        // Random starting position
        let x = Math.floor(Math.random() * this.SIZE);
        let y = Math.floor(Math.random() * this.SIZE);

        // Keep track of every path tile
        const path = [];

        // Create a connected path
        for (let i = 0; i < 40; i++) {
            this.grid[y][x] = ".";

            path.push({ x, y });

            const directions = [
                [0, -1], // up
                [0, 1],  // down
                [-1, 0], // left
                [1, 0]   // right
            ];

            const [dx, dy] =
                directions[Math.floor(Math.random() * directions.length)];

            x = Math.max(0, Math.min(this.SIZE - 1, x + dx));
            y = Math.max(0, Math.min(this.SIZE - 1, y + dy));
        }

        // Add some extra random paths
        for (let y = 0; y < this.SIZE; y++) {
            for (let x = 0; x < this.SIZE; x++) {
                if (
                    this.grid[y][x] === "#" &&
                    Math.random() > this.HOLE_CHANCE
                ) {
                    this.grid[y][x] = ".";
                }
            }
        }

        // Player starts at the first path tile
        const player = path[0];

        this.grid[player.y][player.x] = "P";

        // Shuffle path positions
        const available = path
            .filter(pos => !(pos.x === player.x && pos.y === player.y))
            .sort(() => Math.random() - 0.5);

        // Place hats only on connected path
        for (let i = 0; i < this.HAT_COUNT; i++) {
            if (available.length === 0) break;

            const hat = available.pop();

            this.grid[hat.y][hat.x] = "^";
        }
    }

    printField() {
        console.log(
            this.grid
                .map(row => row.join(" "))
                .join("\n")
        );
    }
}

const field = new Field();

field.printField();
