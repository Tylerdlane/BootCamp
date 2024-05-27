// Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

// See example below ...

// ```
//     This is a string
//     There was string
//       ^^^^^^^          <-- 7 differences
// ```

// In the above example, the function should return the dynamic string "There are 7 differences".

// Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as a collection (array) of characters. How would you iterate over them and compare?  What edge conditions should you check for?

// Made a function that takes 2 strings as arguments 
const differences = (str1, str2) => {
    //I set a count variable to hold the number of differences found in the 2 strings given
    let count = 0;
    // Made an array that will take the string that we split into an array and give us the longest array. This is so we test different strings and not worry about what order they are passed in!
    let arr = [];
    //Split the strings into Arrays so we can loop over them
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    //Getting the longest String passed in so we can loop over that as our base line to test against 
    if(arr1.length > arr2.length){
         arr = arr1;
    } else {
         arr = arr2;
    }
    // Looping over the longest Array and checking the value of each index and if they are not strictly equal then we add to our count 
    for(let i = 0; i < arr.length; i++){
    if(arr1[i] !== arr2[i]){
        count++;
    }
}
//Return the # of times the two strings(Arrays) or different
    return `There are ${count} differences`;
}

console.log(differences("This is a string", "There was string"))
//test if str2 is longer
console.log(differences("This is a string", "There was string bob"))
// test if str1 is longer
console.log(differences("This is a string with extra", "There was string"))
