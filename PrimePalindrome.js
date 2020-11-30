var prompt = require('prompt-sync')();

function prime(n) {
    let number = n;
    for (let value = 2; value <= number / 2; value++) {
        if (number % value == 0) {
            console.log("not prime");
            break;
        }
    }
    console.log("prime");
}

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

let n = prompt("Enter number : ");
if (prime(n) != 0) {
    if (checkPalindrome(n) != 0) {
        console.log(n + " number is palindrome and prime also");
    } else {
        console.log("Number is not palindrome or not prime");
    }
} else {
    console.log("Number is not prime");
}