// 4.Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

var prompt = require('prompt-sync')();

let coin = Math.floor(Math.random()*10) % 2;
if(coin == 1)
    console.log("Heads");
else
    console.log("Tails");
