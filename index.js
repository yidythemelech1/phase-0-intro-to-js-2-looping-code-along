// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage:
  countDown(10);
  const assert = require('assert');

  // Test writeCards
  const expectedMessages = [
    "Thank you, Charlie, for the wonderful birthday gift!",
    "Thank you, Samip, for the wonderful birthday gift!",
    "Thank you, Ali, for the wonderful birthday gift!"
  ];
  assert.deepStrictEqual(writeCards(["Charlie", "Samip", "Ali"], "birthday"), expectedMessages);
  
  console.log("writeCards function passed all tests!");
  const { log } = console;
  let output = [];
  
  console.log = (msg) => output.push(msg);
  
  // Test countDown
  countDown(10);
  const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  assert.deepStrictEqual(output, expectedOutput);
  
  console.log = log;  // Restore original console.log
  console.log("countDown function passed all tests!");
        