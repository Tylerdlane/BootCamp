// let veggies =[
//     'tomatoes', 'peppers', 'eggplant', 'pumpkin'
// ];

// let fruits = ['oranges','apple'];
// // console.log(fruits[fruits.length-1]);
// // console.log(veggies[1]);
// // // console.log(fruits.pop());
// // console.log(fruits);
// // console.log(fruits.shift())
// // console.log(fruits);
// // veggies.forEach(vegtable => fruits.push(vegtable.toUpperCase()))

// veggies.forEach ( x =>{
//     typeof x === 'string' ? fruits.push(x.toUpperCase()) : null;
// })
// fruits.push('mangoes', 'peaches')
// fruits = fruits.map(x => x.toLowerCase());
// fruits.sort();

// fruits = fruits.map((x, index) => {
//      if(index % 2 === 0){
//    return x.toUpperCase()
// } else {
//     return x.toLowerCase()
// }
// }
// )
// console.log(fruits);

let theString = (str) => { 
    let splitStr = str
    .split("")
    .sort()
    .join("");
    return splitStr;
}  
console.log(theString("dacbe"));
















