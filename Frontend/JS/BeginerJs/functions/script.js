// function greeting(name = "stranger"){
    // console.log(`Hey ${name}, how's it going?`);
//     console.log(`Where's the party at?`);
//     console.log(`Did anyone bring spinach dip?`);
// }
//  greeting("Tyler");

// function greeting2(age){
//     return `So I hear you are ${age} years old!`
// }
// let result = greeting2(30)
//  console.log(result);

//  function greeting3(name , age){
//     return `Hi ${name}, I hear you are ${age} yeras old!`
//  }
//  let result = greeting3("Tyler",29)
//  console.log(result)

// function area(length , width){
//     return (length * width);
// }
// console.log(area(10,2));

// const hello = function(){
//     return 'how are you?'
// }
// console.log(hello());

// function even(number){
//    return number % 2 ? `The Number ${number} is odd!`: `The Number ${number} is even!`
// }
// console.log(even(2));

// let area = function(length,width){
//     let result = (length * width);
//     return result;
// }
// console.log(area(5,5));

// let area = (length,width) => {
//     let result = length * width;
//     return result;
// }
// console.log(area(5,5))
let number = () =>{
for(i=1;i<=20;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if(i%5 == 0){
        console.log('Buzz');
    }else if(i % 3 == 0){
        console.log('Fizz');
    }else{
        console.log(i);
    }
    }
}
number();

