// 4.Enter 3 Numbers do following arithmetic operation and find the one that is
//   maximum and minimum
// a. a + (b * c) , b. (c + a) / b , c. a % (b + c) , d. (a * b) + c  

var prompt = require('prompt-sync')();

let num1 = prompt('Enter the first number : ');
let num2 = prompt('Enter the second number : ');
let num3 = prompt('Enter the third number : ');
let a = (num1 + (num2 * num3))
let b = ((num3 + num1) / num2)
let c = (num1 % (num2 + num3))
let d = ((num1 * num2) + num3)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
if ((a > b) || (a > c) || (a > d)) {
    console.log("a is greater");
}
else if ((b > c) || (b > d)) {
    console.log("b is greater");
}
else if (c > d) {
    console.log("c is greater");
}
else {
    console.log("d is greater");
}
if ((a < b) && (a < c) && (a < d)) {
    console.log("a is smaller");
}
else if ((b < c) && (b < d)) {
    console.log("b is smaller");
}
else if (c < d) {
    console.log("c is smaller");
}
else {
    console.log("d is smaller");
}