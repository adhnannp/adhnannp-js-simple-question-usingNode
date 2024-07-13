const read = require("readline-sync");
let num = parseInt(read.question("enter your number: "));

if(num<=1) {
    console.log("your number is not a prime number");
} else {
    let isPrime=true;
    for (let i=2; i<=(num/2); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("your number is a prime number");
    } else {
        console.log("your number is not a prime number");
    }
}
