let number = [];

for (i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * (999 - 100)) + 100;
    number.push(randomNumber);
}

let size = number.length;
number.sort();
console.log("sorted Array : "+number.toString());
let secondLargest = number[size-2];
console.log("2nd largest element is : "+secondLargest);
let secondSmallest = number[1];
console.log("2nd smallest element is : "+secondSmallest);