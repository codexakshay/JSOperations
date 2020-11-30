var prompt = require('prompt-sync')();

let number = prompt("Enter a number: ");
let n = 0;
let powerOfTwo = 1;
while ((n <= number) && (number < 8)) {
    powerOfTwo = (2 * powerOfTwo);
    console.log(powerOfTwo);
    n = n + 1;
}