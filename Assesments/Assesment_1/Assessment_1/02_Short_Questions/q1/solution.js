//created the arrays to test
let arr1 =[1,-2, 3, 5];
let arr2 =[-1,-2,-5];

// created a variable of sum to hold the value when we loop through the array
let sum = 0;
// Creat a function call positiveSum
function positiveSum(){
//loop through the array
    for(let i = 0; i < arr.length; i++){
        //Conditional to check if the value is positive
        if(arr[i] > 0){
            // each index that is positive will add to the  variable sum we created 
            sum += arr[i];
        }else if(arr[i] >= 0){
            // if the value is less than 0 ie. negative, it will add nothing(0) to sum
            sum += 0;
        }

    }
    return sum;
}
//calling the function positiveSum
(positiveSum(arr1));
(positiveSum(arr2));
