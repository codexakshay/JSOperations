var prompt = require('prompt-sync')();

let number = prompt("Enter number : ");
let temp = 0;

for (i = 2; i <= number / 2; i++) {
    if ((number % i) == 0) {
        console.log(number + " is not a prime number");
        temp = 1;
        break;
    }
}
if (temp == 0) {
    console.log(number + " is a prime number");
}