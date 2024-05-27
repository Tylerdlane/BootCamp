// let names = ["Alice", "Bob", "", "Dave", null];

// for(let i = 0; i < names.length; i++){
// if(names[i]){
//     console.log(`Hello, ${names[i]}`);
// }else{
//     console.log(`Hello, Guest`);
// }
// }

// let numbers = [1,2,3,4,5];

// const dubNum = numbers.map((num)=> num * 2);

// console.log(dubNum);

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2;
// }
// console.log(numbers);

// let task = [true,false,true,true,false];
// let correct = 0;

// for(let i = 0; i < task.length; i++){
//     if(task[i]){
//         correct += 1;

//     }
// }

// let completedPer = (correct / task.length) *100;
// console.log(`You are ${completedPer}% correct!`);

// let fruits = ["Apple", "Banana", "Cherry"];

// fruits.push("Pineapple");
// fruits.shift();
// console.log(`The index of Cherry is ${fruits.indexOf("Cherry")}`);
// console.log(fruits.toString());
// let newar= fruits.toString();
// console.log(typeof newar)

let examples = ['APPLE', 'Apple Cidar', '   applesauce', 'apple pie', 'green apples'];
// let result = examples.map(val =>{
//     return val.trim();
// })
// result = result.map(val => {
//     return val.toLowerCase();
// })
// result = result.filter(val => {
//     return val.startsWith('apple')
// })
// result.sort();

// console.log(result); 

let results = examples 
.map(val => val.trim().toLowerCase())
.filter(val => val.startsWith('apple'))
.sort();
console.log(results);







