// Display the welcome message to STDOUT.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for the user input.
process.stdin.on("data", (input) => {
  const name = input; // Assign the user input to the "name" variable

  // Display the user's name to STDOUT.
  process.stdout.write(`Your name is: ${name}\n`);
});

// Display closing message when user ends the program.
process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
