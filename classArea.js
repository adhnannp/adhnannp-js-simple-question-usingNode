
const read = require("readline-sync");
class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice = parseInt(read.question("Choose an option to calculate the area:\n1. Circle \n2. Square \n3. Rectangle \n4. Triangle\n"));       
        switch (choice) {
            case 1:
                this.circle();
                break;
            case 2:
                this.square();
                break;
            case 3:
                this.rectangle();
                break;
            case 4:
                this.triangle();
                break;
            default:
                console.log("Invalid choice");
        }
    }

    circle() {
        let radius = parseFloat(read.question("Enter the radius of the circle: "));
        let area = super.circle(radius);
        console.log(`The area of the circle is: ${area}`);
    }

    square() {
        let side = parseFloat(read.question("Enter the side of the square: "));
        let area = super.square(side);
        console.log(`The area of the square is: ${area}`);
    }

    rectangle() {
        let length = parseFloat(read.question("Enter the length of the rectangle: "));
        let width = parseFloat(read.question("Enter the width of the rectangle: "));
        let area = super.rectangle(length, width);
        console.log(`The area of the rectangle is: ${area}`);
    }

    triangle() {
        let base = parseFloat(read.question("Enter the base of the triangle: "));
        let height = parseFloat(read.question("Enter the height of the triangle: "));
        let area = super.triangle(base, height);
        console.log(`The area of the triangle is: ${area}`);
    }
}

let myClass1 = new MyClass();
myClass1.main();