let arr1= 
[ 1,  true,  -2,  false,
  "konnichewa",  "welcome",  true,  "hello",
  true,  0, true,  0,
  "NAMASTE",  NaN, "", true ,
  "hi",  true,  546,  true ,
  false, undefined, true,  'hola'];

 let arr2 = [true,false,true,false,false];
 //set a variable to count how many times we have a truthy value
let count = 0;
 function filterTime(arr){
    // going through the arrays to check values
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            // if the vaule is true then we increase the count
            count++;
        }
    }
    // arr.length will display how many elements are in the array
    return `${count} from ${arr.length} elements.`;



 }
 
 (filterTime(arr1));
 (filterTime(arr2));