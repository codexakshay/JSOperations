var prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Enter first integer: "));
let num2 = parseInt(prompt("Enter second integer: "));
let num3 = parseInt(prompt("Enter third integer: "));

let numbers = [num1, num2, num3];
let sum = numbers[0] + numbers[1] + numbers[2];

if (sum == 0) {
    console.log("Sum of integers is equal to zero");
} else {
    console.log("Sum of integers is not equal to zero");
}
