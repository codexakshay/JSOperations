// 2.Read a number and display the week day

let day = Math.floor(Math.random() * 10) % 7 + 1;
console.log("Day : " + day);
switch (day) {
    case 1:
        day = console.log("Sunday");
        break;
    case 2:
        day = console.log("Monday");
        break;
    case 3:
        day = console.log("Tuesday");
        break;
    case 4:
        day = console.log("Wednesday");
        break;
    case 5:
        day = console.log("Thursday");
        break;
    case 6:
        day = console.log("Friday");
        break;
    case 7:
        day = console.log("Saturday");
    default:
        break;
}
