var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name?', {
    hideEchoBack: false
});
console.log(`Hi ${userName}!`)

var favFood = readlineSync.question("What is your favorite food?");

var favDrink = readlineSync.question("What is your favorite drink?");

console.log(`Hi ${userName}, your favorite food is ${favFood} and your favorite drink is ${favDrink}!`);

spiceLvl = ["spicy", "very spicy", "so spicy, you won't be able to feel your face"]

index = readlineSync.keyInSelect(spiceLvl, "How spicy would you like your tacos?")
console.log(`Ok, so you want your tacos to be ${spiceLvl[index]}.`)
if (readlineSync.keyInYN("Are you sure about this?")) {
    console.log("Ok, we'll have your order right out.")
} else {
    console.log("What's the matter? Can't handle the heat?")
}