
// Write a function that takes an array full of random words but one of the words is “Waldo.” 
// The function should find the word “Waldo” and return it in a message (as a string) that says:
// “Found Waldo at position” plus the index it found “Waldo.” 
// Example:
// [“Cat”, “Bike”, “Wheel”, “Waldo”, “Pin”, “Storm”] 
// --> 
// “Found Waldo at position 3” 


//Created the array of words and names

// let arr1 = ["Cat", "Bike", "Wheel", "Waldo", "Pin", "Storm"]
// let arr2 = ["apple", "bike", 'Waldo']
// //Created a function named func that takes an array as a paramater using an arrow function 
// const func = (arr) => {
//     //Loop through the array 
//     for (let i = 0; i < arr.length; i++) {
//         //If the index of the array is  === "Waldo" 
//         if (arr[i] === "Waldo") {
//             //returns Waldo and the index "Waldo" is at
//             return `Found ${arr[i]} at positon ${[i+1]}, where the first postion is 1`
//         }
//     }

// }
// //Call the function
// console.log(func(arr1));
// console.log(func(arr2));















// Write a function that takes in a value and returns an array in descending order from the value to 1:
// Example:
// Value = 7 --> [7, 6, 5, 4, 3, 2, 1]

// func that takes an int
//a for loop that decrements
//end loop when it gets to 1
//have an array to store each number we pass

// function desc(int) {
//     let result = [];

//     for (let i = int; i >= 1; i--) {
//         result.push(i)
//     }

//     return result;


// }

// console.log(desc(7));
// console.log(desc(9));
// console.log(desc(13));










// Write a function that removes the spaces from a string, then returns it. 
// Example: 
// “H e l l o”  => “Hello”
// “2 5 r w e f g w t g 2 2 f” => “25rwefgwtg22f”
// **Do not use any RegEx or the replace() and replaceAll() methods**

// function rem(str){
//     let result = " "
//     for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') {
//         result = result + str[i];
//     }
// }
// return result;
// }

// console.log(rem("H E L L O"));
// console.log(rem("2 5 r w e f g w t g 2 2 f"));



// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

function truFal(arr) {
    var resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'flick') {
            resultArr = arr.map((val) => val !== "flick")
        }
    }
    return resultArr;
}
console.log(truFal(['codewars', 'flick', 'code', 'wars']))
console.log(truFal(['flick', 'chocolate', 'adventure', 'sunshine']))
console.log(truFal(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))


