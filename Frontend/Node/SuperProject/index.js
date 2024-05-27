//Bringing in the marvel package
const marvel = require('marvel-characters')
// Getting a random character name to appear
console.log(marvel())
// Getting the length of the object which is the total number of characters
console.log(marvel.characters.length)

// GET an error if the name does not start with 'Man' - Prints names that start with 'Man' in the terminal
for (let i = 0; i < marvel.characters.length; i++) {
    let list = marvel.characters[i].toString().startsWith('Man')
    if(list){
        console.log(marvel.characters[i]);
    }
}
// GETTING IRON MAN TO SHOW 
for (let i = 0; i < marvel.characters.length; i++) {
    if (marvel.characters[i] === 'Iron Man') {
        console.log(marvel.characters[i]);
    } 
}

// Getting error for 'Batman'
for (let i = 0; i < marvel.characters.length; i++) {
    let list = marvel.characters[i].toString()
    if (list == 'Batman') {
        console.log("What kind of crossover is this?")
    }  else {
        console.log("No matches found")
        return;
    }
    
}