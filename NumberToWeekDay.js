// 2.Read a Number and Display the week day

var prompt = require('prompt-sync')();

let weekDay = prompt('Enter the number to know the day in words : ');
if (weekDay == 1) {
    console.log("Sunday");
}
else if (weekDay == 2) {
    console.log("Monday");
}
else if (weekDay == 3) {
    console.log("Tuesday");
}
else if (weekDay == 4) {
    console.log("Wednesday");
}
else if (weekDay == 5) {
    console.log("Thursday");
}
else if (weekDay == 6) {
    console.log("Friday");
}
else if (weekDay == 7) {
    console.log("Saturday");
}
else {
    console.log("Please enter the single digit within a week range");
}
