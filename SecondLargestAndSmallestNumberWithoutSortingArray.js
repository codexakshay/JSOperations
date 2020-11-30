let number = [];

for (i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * (999 - 100)) + 100;
    number.push(randomNumber);
}
for (let i = 0; i <= number.length; i++) {
    console.log(number[i]);
}

let largest = secondLargest = (number[0]);
for (i = 0; i < number.length; i++) {
    if ((number[i]) > largest) {
        secondLargest = largest
        largest = (number[i])
    }
    else if (((number[i]) != largest) && (number[i] > secondLargest)) {
        secondLargest = (number[i])
    }
}
console.log("SecondLargest : " + secondLargest);

let smallest = secondSmallest = (number[0]);
for (i = 1; i < number.length; i++) {
    if ((number[i]) < smallest) {
        secondSmallest = smallest
        smallest = (number[i])
    }
    else if (((number[i]) != smallest) && (number[i] < secondSmallest)) {
        secondSmallest = (number[i])
    }
}
console.log("SecondSmallest : " + secondSmallest);