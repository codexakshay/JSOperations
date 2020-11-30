var prompt = require('prompt-sync')();

let n = prompt("Enter number : ");
let powerOfTwo = 1;

for (i = 0; i <= n; i++) {
    powerOfTwo = (2 * powerOfTwo);
    console.log(powerOfTwo);
}