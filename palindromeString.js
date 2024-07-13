const read = require("readline-sync");
let input = read.question("Enter a string: ");
console.log("")
// let cleanedStr = input.toLowerCase();
let reversedStr = input.split('').reverse().join('');
console.log('your reversed string is: '+reversedStr)
if (input === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}