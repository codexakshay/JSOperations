var prompt = require('prompt-sync')();

let input = prompt("Enter a number: ");
if (input < 1) {
    console.log("not allowed!");
}
let count = 0, flag = 0;
for (i = 2; i < input;) {
    if (input % i == 0) {
        factor = i;

        for (let j = 2; j <= factor / 2;) {
            flag = 0;
            if (factor % j == 0) {
                flag = 1;
                break;
            }
            j = j + 1;
        }
        if (flag == 0) {
            console.log(factor);
            count = 1;
        }
    }
    i = i + 1;
}
if (count == 0) {
    console.log("no prime factors found except 1 and input");
}