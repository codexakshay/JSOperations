var prompt = require('prompt-sync')();
let start = prompt("Enter start point : ");
let end = prompt("Enter end point : ");
let repeatedDigits = [];

for (let number = start; number <= end; number++) {
    let quotient = parseInt(number / 10);
    let remainder = number % 10;
    if (quotient == remainder && number != 0) {
        repeatedDigits.push(number);
    }
}
console.log("Repeated Digit : " + repeatedDigits);