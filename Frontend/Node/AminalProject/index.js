var Log = require('log.pets');
var animals = require('animals');

// console.log(animals(), animals(), animals(), animals());

// Log.lion();

// Log.zoo(animals(),animals(),animals());

// console.log('# of animals in the generator:', animals.words.length)
let numOfAnimals = 0;
for (let i = 0; i < animals.words.length; i++){
    let list = animals.words[i].startsWith('g')
    if(list){
        console.log(animals.words[i])
        numOfAnimals++;
    }
}
if(!numOfAnimals){
console.log(`The number of animals that starts with the letter 'G' is: No matches found`)
}else{
    console.log(`The number of animals that starts with the letter 'G' is:${numOfAnimals}`)
}