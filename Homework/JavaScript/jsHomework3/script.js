/*
for(let counter=1;counter<=10;counter++){
    console.log(`Number: ${counter}`);
}
*/
/*
let result='';
for(let counter=5;counter<=10;counter +=1){
    result = result + counter;
}
console.log(`${result}`);
*/
/*
for(let counter=-10;counter<=10;counter++){
    console.log(`Number: ${counter}`);
}
*/
/*
for(let counter=-10;counter<=10;counter+=3){
    console.log(`Number: ${counter}`);
}
*/
/*
let i = 1;
for(i < 5; i++;){
    console.log(`I am Ironman, just kidding i'm a number: ${i} `);
}
*/

// for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++){
// console.log(String.fromCharCode(i));
// }

// for(let l = 1; l <= 5; l++){
//     let row = " ";
//     for(let i = 0; i < l; i++){
//         row += '*';
//     }
//     console.log(row);
// }

// let i = 'Z'.charCodeAt(0);
// while( i >= 'A'.charCodeAt(0)){
//      console.log(String.fromCharCode(i));
//      i--;
// }
// let time = new Date();
// let hr = time.getHours();
// let min = time.getMinutes();
// let sec = time.getSeconds();
// while(sec <= 59 ){
//     console.log(`Good afternoon to you!`);
//     sec++;
// }










/*
1. A while loop that prompts the user for a number
2. Ask if the user would like to enter another number
3. Check if entered values is equal to a number
4. Find the sum of the vaules
5. The loop will end when the user types NO!
6. Print the sum and average of all numbers
*/
   
let num1 = Number(prompt("Please enter a number!"));
let num2 = prompt("Enter another number or no to stop!");
let sum = num1;
let average = 0;
    while(num2 !== isNaN){
        num2 = prompt("Enter another number or no to stop!");
        let finalSum = parseInt(num2);
           sum += finalSum;
    
}

console.log(sum);
