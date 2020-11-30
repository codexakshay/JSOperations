var prompt = require('prompt-sync')();

let number = prompt("Enter number : ");
let sum = 0.0;

for (i = 1; i <= number; i++) {
    sum = (sum + 1 / i);
}

console.log(sum);