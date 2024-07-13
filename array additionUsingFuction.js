const read = require("readline-sync");
function main() {
    let array = getArray();
    displayArray(array);
}
function getArray() {
    let limit = parseInt(read.question("Enter the size of the array: "));
    let array = [];
    
    for (let i = 0; i < limit; i++) {
        array.push(parseInt(read.question(`Enter element ${i + 1}: `)));
    }
    
    return array;
}
function displayArray(arr) {
    console.log("Array elements:");
    console.log(arr);
}
main();