let flips = 1;
let heads = 0;
let tails = 0;

while (heads <= 10 && tails <= 10) {
    var coin = Math.floor(Math.random() * 2);
    flips = flips + 1;
    if (coin == 1) {
        console.log("Heads");
        heads = heads + 1;
    }
    else if (coin == 0) {
        console.log("Tails");
        tails = tails + 1;
    }
}
console.log("We got", heads, "heads and", tails, "tails!");