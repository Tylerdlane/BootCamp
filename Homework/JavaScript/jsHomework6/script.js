// const car = {
//     make : 'Kia',
//     model : 'Carnival',
//     year : 2024
// };
// console.log(car.make);
// console.log(car.model);
// console.log(car.year);
// console.log(car['model']);
// delete car.year
// console.log(car);

const personsCars = {
    name:"Piyush",
    age: 36,
    cars:[
        {name:"Bugatti",models:["Pur","Centodieci","Divo"]},
        {name:"Tesla",models:["S","3","X","Y"]},
        {name:"Fiat",models:["500","Panda"]},
        {name:'Kia',models:["Optima","Soul","Stinger"]}
    ],
    pets:['Maggie','Stella','Sugar','Spice']

}
console.log(`${personsCars.name} is ${personsCars.age} years old.`);
console.log(`${personsCars.name} owns a ${personsCars.cars[0].name} ${personsCars.cars[0].models[0]}, ${personsCars.cars[0].models[1]}, ${personsCars.cars[0].models[2]}.`);
console.log(`However, ${personsCars.name} mostly drives his ${personsCars.cars[1].name} ${personsCars.cars[1].models[0]}, ${personsCars.cars[1].models[1]}, ${personsCars.cars[1].models[2]}, and ${personsCars.cars[1].models[3]}.`);
