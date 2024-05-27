const isPalindrome = ( str ) => {

    if(typeof str !== 'string'){
        return false;
    }   

    let lowerCaseText = str.toLowerCase();
    let newText = "";

    for(const char of lowerCaseText){
        newText += char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123 ? char : ""; 
    }
    
    str = newText;
    let reversedText = str.split("").reverse().join("");
    let result = str === reversedText ? true : false;
    return result;



};
//Uncovered Test
const doubleInt = ( int ) => {
    return int * 2;
}

//Expot function for test file
module.exports = {
    isPalindrome,doubleInt
}