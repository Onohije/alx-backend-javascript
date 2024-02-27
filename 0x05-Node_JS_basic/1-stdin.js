#!/usr/bin/env node
// 1. Using Process stdin

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.setEncoding('utf-8');
stdin.on('readable', () => {
  stdout.write(`Your name is: ${stdin.read()}`);
  process.exit();
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
