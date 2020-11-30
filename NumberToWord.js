// 1.Read a single Digit number and write the number in word using case

let number = Math.floor(Math.random() * 10) % 10;
console.log("Number : " + number);
switch (number) {
    case 1:
        number = console.log("One");
        break;
    case 2:
        number = console.log("Two");
        break;
    case 3:
        number = console.log("Three");
        break;
    case 4:
        number = console.log("Four");
        break;
    case 5:
        number = console.log("Five");
        break;
    case 6:
        number = console.log("Six");
        break;
    case 7:
        number = console.log("Seven");
        break;
    case 8:
        number = console.log("Eight");
        break;
    case 9:
        number = console.log("Nine");
        break;
    case 0:
        number = console.log("Zero");
        break;
    default:
        break;
}
