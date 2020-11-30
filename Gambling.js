let money = 100;
let bet = 0;
let win = 0;

while ((money > 0) && (money < 200)) {
    (bet++)
    var random = Math.floor(Math.random() * 2);
    if (random == 1) {
        (win++)
        money = (money + 1);
    }
    else {
        money = (money - 1);
    }
}
console.log("Bet : " + bet);
console.log("Win : " + win);
console.log("Money : " + money);