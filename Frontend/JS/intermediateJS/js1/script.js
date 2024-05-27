// console.log('Good Morning!');

//ternary operator
let myBool = " ";

// if-then-else
// if(myBool){
//     console.log('This is true')
// } else {
//     console.log("This is false")
// }



//  1.ternary  operator
//  if else all on one line
// let myString = myBool ? "Yes" : "No";
// console.log(myString);

//  2.Destructuring

// let myObject = {
//     first: "Tyler",
//     last: "Lane",
//     age: 29
// }

// console.log(`My first name is ${myObject.first}.`);
// console.log(`My last name is ${myObject.last}.`);
//DESTRUCTURING AN OBJECT
//REFER TO IT BY KEYS
// let {first, last} = myObject;

// console.log('my first is', first);
// console.log('my last is', last);

//ARRAY
//REFER BY INDEX
// let myArray =['apple', 'andriod','chair'];
// console.log('My fruit is:', myArray[0]);
// console.log('My phone is an:', myArray[1]);

//DESTRUCURTING AN ARRAY

// let [fruit,phone,furniture] = myArray;
// console.log('my furniture is:', furniture);
// console.log('my phone is:', phone);

// function d001([fruit,phone,furniture]) {
//     return `${fruit}, ${phone}, ${furniture}`
// }

// console.log(d001(myArray));
// //CREATED AN OBJECT
// let object2 = {
//     fun: true,
//     time: "22 mins",
//     points: 30
// }
// //CREATED A FUNCTION, DESRUCTURING THE OBJECT BY KEYS
// function hoops({fun,time,points}){
//     //RETURNING THE KEY:VALUES 
//     return `Did I have fun: ${fun}! I played ${time} and scored ${points} points`
// }
// //CALLING AND LOGGING THE FUNCTION
// console.log(hoops(object2));

//SPREAD OPERATOR

let arr1 = ['a','b']
let arr2 = ['c','d']
//want to combine 2 arrays 
let arrComb = arr1.concat(arr2);
let arrCombSpread = [...arr1, ...arr2]

console.log('with concat',arrComb);
console.log('with spread operator',arrCombSpread);

//wish to append and prepend add e to the combined array
let arrCombSpreadWithAppend = ['Prepend string',...arr1, ...arr2, 'e']
console.log('with the spread opreator and appended an element',arrCombSpreadWithAppend);

//Spread Operator with objects
let objA = {
    first: "Tyler",
    last: "Lane",
    gender: "female"
}

let objB = {
    age: 29,
    city: "Hutto",
    gender:"male"
}

let objC = {
    gender: "Cat"
}
let objComb = {...objA, ...objB,...objC}
console.log(objComb);
