var prompt = require('prompt-sync')();

let number = prompt("Enter the Number :");
fact = 1;
for (i = 1; i <= number; i++) {
    fact = (fact * i);
}
console.log(fact);