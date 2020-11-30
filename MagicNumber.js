var prompt = require('prompt-sync')();

let minNumber = 0;
let maxNumber = 100;
let midNumber = 0;

while(minNumber <= maxNumber){
    midNumber = parseInt(maxNumber+minNumber)/2;
    console.log(midNumber);
    let input = prompt("Is your number lesser,greater or equals to midNumber: ");
    if(input == "greater")
        minNumber = midNumber;
    else if(input == "lesser")
        maxNumber = midNumber;
    else if(input == "equals"){
        console.log(midNumber + " is your Number");
        break;
    }
    else
        console.log("Invalid input");
}

