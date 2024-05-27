 // Exercise 1
//  const greeting = (name) => {
//     return `Hey ${name}, how's it going?`
//  }
//  console.log(greeting('Tyler'));

// Exercise 2
// testing to see if a vaule is a number
//  let getVolume = (length,width,height) =>{
//     if(typeof length != 'number' || typeof width != 'number' || typeof height != 'number'){
//     return `Error, Face Termination`
//     }else{
//         return length*width*height
//     }
//  }
//  result = getVolume(10,2,3);
//   console.log(result);

// Exercise 3
//  let getVolume = (length,width,height) => {
//     if(typeof length != 'number' || typeof width != 'number' || typeof height != 'number'){
//     return `Error, Face Termination`
//     }else{
//         return length*width*height
//     }
//  }
//  result = getVolume(10,2,6); // SET UNDEFINED SO THAT THE VAULE LENGTH = 4 WILL HOLD TRUE
//   console.log(result);

//Exercise 4

// let getVolume = (l , w , h) => l * w * h;
// console.log(getVolume(10,2,6));

//Exercise 5

// let upper = str => str.toUpperCase();

// console.log(upper("hello"));

// Exercise 6

// let animal = str => {
//     if(str.length % 2 == 0){
//         return `The string is EVEN`
//     } else{
//         return `The string is ODD`
//     }
// } 
// console.log(animal('I like dogs'));
// console.log(animal('I like horses!'));
// console.log(animal('hello'));

//Exercise 7

// let aniaml = (str1,str2) =>{
//     let string1 =str1.substring((str1.length - 3));
//     let string2 =str2.substring((str2.length - 3))
//     if(string1 === string2){
//         return "They match!!!"
//     }else{
//         return 'They do not match!!!'
//     }
// }
// console.log(aniaml('dogs','horses'))
// console.log(aniaml('Dogs','lincoln logs'));

for(let l = 1; l <= 5; l++){
    let row = "";
    for(let i = 0; i < l; i++){
        row += '*';
    }
    console.log(row);
}


