const read = require("readline-sync");
let input = read.question("Enter your string: ");  // Example input, change as needed

let my_string = isNaN(Number(input)) ? input : Number(input);

try {
    if (typeof my_string === "number") {
        throw new Error("my_string.split is not a function");
    }
    let reversedString = my_string.split("").reverse().join("");
    console.log(`Reversed string is : ${reversedString}`);
} catch (err) {
    console.log(`Error : ${err.message}`);
} finally {
    console.log(`Type of my_string is : ${typeof my_string}`);
}