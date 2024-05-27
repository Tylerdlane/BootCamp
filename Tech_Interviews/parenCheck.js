const test1 = '({"Hello World"!})'; // true
const test2 = '[[{({Hello World!})}]}'; // false

const parenCheck = (str) => {
    //Set a new array to store the opening parentheses
    let newArr = [];
    // Store open and closing enclosures
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    //Loop over the str
    for (let char of str){
        //if the chars'key' exist in the obj
        if(obj[char]){
            //If char exist then we will push it to the new arr
            newArr.push(char)
            // If it is a closing parentheses
        } else if (
            char === ")" ||
            char === "}" ||
            char === "]" 
        ) 
        {
            //Checking the last element of the newArr and if it does not equal char then the function returns false
            if(
                obj[newArr.pop()] !== char
            ) {
                return false;
            }
        }
    }
    //If there are no unmatched opening parentheses return true
    return newArr.length === 0;

}

console.log(parenCheck(test1));
console.log(parenCheck(test2));