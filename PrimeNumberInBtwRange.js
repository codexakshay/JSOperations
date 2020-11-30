var prompt = require('prompt-sync')();

let start = prompt("Start Range : ");
let end = prompt("End Range : ");

for (i = start; i <= end; i++) {
    let flag = 0
    for (j = 2; j < i; j++) {
        if ((i % j) == 0) {
            flag = 1;
        }
    }
    if (flag == 0) {
        console.log(i);
    }
}