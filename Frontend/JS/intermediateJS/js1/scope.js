//Define step
// var myVar;
// console.log(typeof myVar);
// //execution step
// myVar = 10
// console.log(typeof myVar);

// var myVar  = 10;

// function myFn(){
//     console.log(myVar)//EXEC --ignore -- run
//     // var myVar; // DEFN --run it -- ignore
//     // myVar = 20;//exec --ignore --run

// }

// //STUFF RUNS IN 2 STEPS 
// //1. IS THE DEFINITON STEP
// //2. IS THE EXECUTOIN STEP

// myFn()

var myVar  = 10;

function myFn(){
    myVar = 20;
    console.log(myVar)//EXEC --ignore -- run
    // var myVar; // DEFN --run it -- ignore
    // myVar = 20;//exec --ignore --run

}
console.log(myVar)//EXEC --ignore -- run


//STUFF RUNS IN 2 STEPS 
//1. IS THE DEFINITON STEP
//2. IS THE EXECUTOIN STEP

myFn()
console.log(myVar)//EXEC --ignore -- run
