var prompt = require('prompt-sync')();

let n = prompt("Enter the Number :");

for (i = 2; i <= n; i++) {
    while (n % i == 0) {
        console.log(i);
        n = n / i;
    }
}

if (n > 2) {
    console.log(n);
}