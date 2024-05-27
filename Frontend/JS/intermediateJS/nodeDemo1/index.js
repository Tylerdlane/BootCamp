//CREATING A CONSTANT VARIABLE CALLED oneLinerJoke
//GET THE LIBARAY ONE-LINER-JOKE FROM  node_modeules
//AND ASSIGN IT TO THE CONSTANT VARIABLE
//REQUIRE === BRING IT INTO THE CODE
var oneLinerJoke = require('one-liner-joke');
//GET A RANDOM JOKE AND STORE IT IN THE VARIABLE getRandomJoke
var getRandomJoke = oneLinerJoke.getRandomJoke({
    exclude_tags:["dirty", "adult", "racist"]
});
console.log(getRandomJoke)
console.log(oneLinerJoke.allJokes)
