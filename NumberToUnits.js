// 3.Read a Number 1,10,100,1000 etc and display unit,ten,hundred,...

var prompt = require('prompt-sync')();

let num = prompt('Enter the number : ');
if ((num > 0) && (num <= 9)) {
    units = (num % 10)
    console.log("The units place is : : " + units);
}
else if ((num >= 10) && (num <= 99)) {
    units = (num % 10)
    tens = ((num / 10) % 10)
    console.log("The tens place is : " + tens);
    console.log("The units place is : " + units);
}
else if ((num >= 100) && (num <= 999)) {
    units = (num % 10)
    tens = ((num / 10) % 10)
    hundreds = ((num / 100) % 10)
    console.log("The hundreds place is : " + hundreds);
    console.log("The tens place is : " + tens);
    console.log("The units place is : " + units);
}
else if ((num >= 1000) && (num <= 9999)) {
    units = (num % 10)
    tens = ((num / 10) % 10)
    hundreds = ((num / 100) % 10)
    thousands = (num / 1000);
    console.log("The Thousands place is : " + thousands);
    console.log("The hundreds place is : " + hundreds);
    console.log("The tens place is : " + tens);
    console.log("the units place is : " + units);
}
