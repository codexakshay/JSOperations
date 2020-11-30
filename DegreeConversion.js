var prompt = require('prompt-sync')();

function convertToCelsius(degree) {
    let celsius = (degree - 32) * 5 / 9;
    console.log(celsius);
}

function convertToFahrenheit(degree) {
    let fahrenheit = degree * 9 / 5 + 32;
    console.log(fahrenheit);
}

let degree = prompt("Enter temperature: ");
let conversion = parseInt(prompt("Coversion to:\n" + "1. celsius\n" + "2. fahrenheit\n"));
switch (conversion) {
    case 1:
        convertToCelsius(degree);
        break;
    case 2:
        convertToFahrenheit(degree);
        break;
    default:
        alert("Invalid input");
}