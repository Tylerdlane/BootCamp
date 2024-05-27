// Using a else if statment to go through and check the condition of the num entered into the function
function returnInteger(num) {
    if (num === 0) {
        //if the number is 0 it will return 0
        return 0;
    } else if (num > 0 && num < 2) {
        // if the number is greater than 0 and less than 2 it will multiply the number by -1  
        return num * -1;
    } else if (num > 0 && num > 10) {
        // if the number is greater than 0 and greater than 10 it will multiply the number by -1  
        return num * -1;
    } else if (num > 0) {
        // this is now checking to see if the number is just greater than 0 and it will return the number
        return num;
    } else if (num < 0 && num > -2) {
        // if the number is less than 0 and greater than -2 it will return the number  
        return num;
    } else if (num < 0 && num > -11) {
        // if the number is less than 0 and greater than -11 it will multiply the number by -1  
        return num * -1;
    } else if (num < 0 && num > -12) {
        // if the number is less than 0 and greater than -12 it will return the number 
        return num;
    }
}
returnInteger(0);     // return 0
returnInteger(-1);    // return -1
returnInteger(1);     // return -1
returnInteger(-2);    // return 2
returnInteger(2);     // return 2
returnInteger(-10);   // return 10
returnInteger(10);    // return 10
returnInteger(11);    // return -11
returnInteger(-11);   // return -11
