// getting the word from user
const prompt = require("prompt-sync")({ sigint: true });
const word = prompt("Please enter a word ");

let fs = require("fs");

// Reading the file and storing it as an array called to dictionary
// Make sure the dictionary path is correct.
var dictionary = fs.readFileSync("dictionary.txt").toString().split("\n");

console.log(dictionary);

// Going through the dictionary
for (let i = 0; i < dictionary.length; i++) {
  // Checking if the length matches of the word in the dictionary matches with given word
  if (word.length == dictionary[i].length) {
    // sorting the words by their sequences
    let a = word.split("").sort().join();
    let b = dictionary[i].split("").sort().join();
    // Comparing if they have the same letters
    if (a === b) {
      console.log(dictionary[i]);
    }
  }
}
console.log(word);
