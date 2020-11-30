// 3.Read a number 1,10,100,... and display unit,tens,hundreds,..

var prompt = require('prompt-sync')();

let n = parseInt(prompt("Choose btw 1,10,100,1000,10000,100000 : "));
switch(n) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    default:
        console.log("Illegal choice");
        break;
}