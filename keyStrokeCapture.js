import readline from 'readline';

// 1. Prepare the interface
readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

console.log('Use arrow keys or type letters (Press Ctrl+C to exit)...');

// 2. Listen for the structural keypress object
process.stdin.on('keypress', (str, key) => {
  // Check for Ctrl+C to exit
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }

  console.log(`Key name: ${key.name} | Character: ${str}`);
});
