#!/usr/bin/env node

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up stdin to read user input
process.stdin.setEncoding('utf8');

// Listen for data from stdin
process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Listen for the end of input
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
