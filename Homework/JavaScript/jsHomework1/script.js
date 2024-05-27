const name="Tyler";
let age= 29;
let favColor="Green";
console.log(`/* this is a string */`);
console.log(name);
console.log(`/* this is a number */`);
console.log(age);
console.log(`/* this is a string */`);
console.log(favColor);

console.log(`Hello, my name is ${name}. I am ${age} years old. My favorite color is ${favColor}.`);

const favQuote="If you don't like our wings, we'll give you the bird!"
console.log(favQuote);
console.log(`The string has ${favQuote.length} charaters.`);
const upperCase=favQuote.toUpperCase();
console.log(upperCase);
let newQuote=favQuote.replace("give","show");
console.log(newQuote);

let score=100;
score=110;
console.log(score);

let dog=5;
let cat=9;
console.log(cat+dog);
console.log(cat-dog);
console.log(cat*dog);
console.log(cat/dog);

let apples
console.log(apples);
apples="red";
console.log(apples);

newName=prompt("What is your name?");
console.log(`Hello, ${newName}!`);

let currentBalance=1000000;
let transaction=200000;
let newBalance=currentBalance-transaction;
console.log(`Your balance is ${newBalance}.`);