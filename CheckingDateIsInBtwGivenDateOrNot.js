// 2.Write a program that takes day and month from the command line and prints
//      true if day of month is between March 20 and June 20,false otherwise.

var prompt = require('prompt-sync')();

    let date=Number(prompt("Enter date :"));
    let month=prompt("Enter month :");
    
    if((month.toLowerCase() === 'march' && date > 20 && date< 31)
        || month.toLowerCase() === 'april' && date > 1 && date< 30
        || month.toLowerCase() === 'may' && date > 1 && date< 31
        || month.toLowerCase() === 'june' && date > 1 && date< 20)
        console.log("True.");
    else
        console.log("False.");