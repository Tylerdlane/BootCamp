
// function double(number){
//     let num = number + number;
//     return num;
// }
// console.log(double(5));


// var outValue = 15;
// function remainder(num){
//     let remain = outValue % num;
//      return `The remainder when ${outValue} is divided by ${num} is ${remain}.`

// }
// console.log(remainder(7));

// let type = i => {
//     return `The type of ${i} is a ${typeof i}.`
// } 
// console.log(type(i));

// let type = (i,x) => {
//    console.log(`The type of ${i} is a ${typeof i}. The type of ${x} is a ${typeof x}.`);
//     if(typeof i === typeof x){
//         console.log(`${i} and ${x} are the same type.`)
//     }else
//     console.log(`${i} and ${x} are not the same type.`)
// } 
// type(true,5);

// function numberOfTimes(numbers){
//     let count = {};
//     for ( let i = 0; i < numbers.length; i++){
//         let letter = numbers[i];
//         if(!count[letter]){
//             count[letter] = 1;
//         }else{
//             count[letter]++;
//         }
//     }
//     return count;
// }
// console.log(numberOfTimes('Hello friends'));

	// function longest(str){ 
	// str = str.split(" ") // This will spilt the string to an array
	// return str.sort((a, b) => b.length - a.length)[0] 
	// } 
	// console.log(longest("This is a supersized string!")) 

    // function possibleCombo(str){
    //     let combo = [];
    //     for(let i = 0; i < str.length;i++){
    //         for(let x = i + 1; x < str.length + 1; x++){
    //             combo.push(str.slice(i,x));
    //         }
    //     }
    //     return combo;
    // }
    // console.log(possibleCombo('dog'));
