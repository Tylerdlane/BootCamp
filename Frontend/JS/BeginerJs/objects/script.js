// let person = {
//     name : "John Doe",
//     age : 25,
//     email : 'johndoe@austincc.edu'
// };
// // Dot Notation
// console.log("Dot Notation:", person.name);
// // bracket notation
// console.log("Braket Notation:", person['name']);

// let unknownProperty = prompt('Enter the property you want to access');

// console.log(`${unknownProperty} is:`, person[unknownProperty]);

// person.name = 'Bob Ross';
// console.log(person.name);
// person['name'] = 'Bob Ross';
// console.log(person['name']);

// let car = {

// }

// car.model = 'Soul';
// car.make = 'Kia';
// car.year = 2014;
// car['model'] = 'Soul';
// car['make'] = 'Kia';
// car['year'] = 2014;
// delete car.year;

// console.log(car);

// let person2 = {
//     name: "Alice",                         // string
//     age: 30,                               // number
//     isEmployed: true,                      // boolean
//     hobbies: ["reading", "traveling"],     // array
//     address: {                             // nested object
//       street: "123 Main St",
//       city: "Austin",
//       country: "USA"
//     },
//     greet: function() {                    // function
//       console.log(`Hello, ${person2.name}`);
//     }
//   };
//   person2.greet();
// console.log(`${person2.name} is ${person2['age']} years old!`);
// console.log('Her hobbies include',person2['hobbies'][0]);
// console.log('She is a resident of the',person2['address']['country']);
  
// let person3 ={
//     name : 'Carl',
//     age: 15,
//     isEmployed: false
// };
// const {name, age, isEmployed} = person3;
// // console.log(name, age, isEmployed);
// // console.log(person3.name, person3.age, person3.isEmployed);

// for (let human in person3){
//     console.log(`${human} and ${person3[human]}`);
// }
// let property = Object.keys(person3);

// for (let i = 0; i < property.length; i++){
//     let newProperty = property[i];
//     console.log(`for loop: ${newProperty}: ${person3[newProperty]}`)
    
// }

// console.log(property);

// let student = {
//     name: 'Jaspreet',
//     grade: 10,
//     scores: {
//         english: 48,
//         science: 23
//     }
// };

// const newStudent = student => {
// let sum = 0;
//  let count = 0;
//  for(let key in student.scores){
//     sum += student.scores[key];
//     count ++;
//  }
// return{
//     name: student['name'],
//     average: sum /count
// };
// }   
// let {name, average} = newStudent(student);
// console.log(`${name} has an average grade of ${average}! `);



var myHEBObject = { eggs: '1 dozen', milk: '1/2 gallon', mop: 2};

// let list = [];
// for(let item in myHEBObject){
//     list.push(item);
// }
// console.log(`Item: ${list}`);

console.log(Object.keys(myHEBObject))

console.log(Object.values(myHEBObject))

console.log( Object.entries(myHEBObject))

