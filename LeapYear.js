// 3.Write a program that takes a year as input and outputs the year is leap year or not.

var prompt = require('prompt-sync')();

let year = Number(prompt("Enter the year: "));
    
if(((year % 400) == 0)&&(year > 999)&&(year < 10000))
    console.log("The year is a leap year");
else
    if(((year % 4) == 0)&&(year > 999)&&(year < 10000)&&((year % 100) != 0))
        console.log("The year is a leap year");
    else
        console.log("The year is not a leap year");

