// 1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and maximum

let numberOne = Math.floor((Math.random() * 900)+ 100);
let numberTwo = Math.floor((Math.random() * 900)+ 100);
let numberThree = Math.floor((Math.random() * 900)+ 100);
let numberFour = Math.floor((Math.random() * 900)+ 100);
let numberFive = Math.floor((Math.random() * 900)+ 100);

let max = 0;

if(numberOne > max)
    max = numberOne;
if(numberTwo > max)
    max = numberTwo;
if(numberThree > max)
    max = numberThree;
if(numberFour > max)
    max = numberFour;
if(numberFive > max)
    max = numberFive;

let min = 999;

if(numberOne < min)
    min = numberOne;
if(numberTwo < min)
    min = numberTwo;
if(numberThree < min)
    min = numberThree;
if(numberFour < min)
    min = numberFour;
if(numberFive < min)
    min = numberFive;

console.log("Maximum Number: " + max + " & Minimum Number: " + min);