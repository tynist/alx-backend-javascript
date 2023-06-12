// Display the welcome message to STDOUT.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for the user input.
process.stdin.on('data', (userInput) => {
  const userInput = process.stdin.read(); // Read user input from STDIN

  // Check if user input is not null & Display the user's name to STDOUT
  if (userInput !== null) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

// Display the closing message when user ends the program.
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
