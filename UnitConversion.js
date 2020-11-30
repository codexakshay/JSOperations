// 4.Write a program that takes user Inputs and does unit conversion of 
//      different lengths
//      a. Feet to Inch     b. Inch to Feet     c. Feet to Meter    d. Meter to Feet

var prompt = require('prompt-sync')();

let num = prompt("Enter number: ");

let conversion = parseInt(prompt(
    "1. Feet to Inch\n" +
    "2. Feet to Meter\n" +
    "3. Inch to Feet\n" +
    "4. Meter to Feet\n"
));

let result;
switch (conversion) {
    case 1:
        result = num * 12;
        console.log(num + "ft = " + result + "in");
        break;
    case 2:
        result = num / 3;
        console.log(num + "ft = " + result + "m");
        break;
    case 3:
        result = num / 12;
        console.log(num + "in = " + result + "ft");
        break;
    case 4:
        result = num * 3;
        console.log(num + "m = " + result + "ft");
        break;
    default:
        console.log("'Invalid input");
}