const read=require("readline-sync");
class Calculator{
    addition(num1, num2) {
        return parseFloat(num1 + num2);
    }

    subtraction(num1, num2) {
        return parseFloat(num1 - num2);
    }

    multiplication(num1, num2) {
        return parseFloat(num1 * num2);
    }

    division(num1, num2) {
        if (num2 === 0) {
            return "Error: Division by zero!";
        }
        return parseFloat(num1 / num2);
    }
}
const calculator = new Calculator();
let choice = 0;
let num1, num2;
do {
    console.log("\n!!!!!!!!!!!!! Calculator !!!!!!!!!!!!");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
    choice = parseInt(read.question("Enter your choice (1-5): "));
    switch (choice) {
        case 1:
            num1 = parseFloat(read.question("Enter the first number: "));
            num2 = parseFloat(read.question("Enter the second number: "));
            console.log(`Result: ${calculator.addition(num1, num2)}`);
            break;
        case 2:
            num1 = parseFloat(read.question("Enter the first number: "));
            num2 = parseFloat(read.question("Enter the second number: "));
            console.log(`Result: ${calculator.subtraction(num1, num2)}`);
            break;
        case 3:
            num1 = parseFloat(read.question("Enter the first number: "));
            num2 = parseFloat(read.question("Enter the second number: "));
            console.log(`Result: ${calculator.multiplication(num1, num2)}`);
            break;
        case 4:
            num1 = parseFloat(read.question("Enter the numerator: "));
            num2 = parseFloat(read.question("Enter the denominator: "));
            console.log(`Result: ${calculator.division(num1, num2)}`);
            break;
        case 5:
            console.log("Exiting the program...");
            break;
        default:
            console.log("Invalid choice. Please enter a number between 1 and 5.");
    }
} while (choice !== 5);