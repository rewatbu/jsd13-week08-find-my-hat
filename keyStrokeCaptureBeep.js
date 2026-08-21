import readline from 'readline';

// 1. Initialize keypress events and raw mode
readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

console.log('Type anything to hear a beep! (Press Ctrl+C to exit)...');

// 2. Listen for keys
process.stdin.on('keypress', (str, key) => {
  // Always handle manual exit first
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }

  // \u0007 is the standard ASCII Bell control character
  process.stdout.write('\u0007');

  // Display the key pressed
  console.log(` Pressed: ${str || key.name}`);
});
