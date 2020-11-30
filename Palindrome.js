var prompt = require('prompt-sync')();

function checkPalindrome(n) {
    let number = n;
    let reverse = 0;
    let remainder = 0;
    let sum = 0;
    while (number > 0) {
        remainder = parseInt(number % 10);
        sum = parseInt(sum * 10 + remainder);
        number = parseInt(number / 10);
    }
    if (n == sum) {
        console.log("Number is palindrome");
    }
    else {
        console.log("Number is not palindrome");
    }
}

let num = prompt("Enter number : ");
checkPalindrome(num);