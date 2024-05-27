//importing the express module to define routes with diffrent endpoints
const express = require('express');
//Imorting the cors module
const cors = require('cors');
//Creating a new instance of express
const app = express();
//App will run on a given PORT or localhost: 3000
const PORT = process.env.PORT || 3000;

// required to read the apiToken
require('dotenv').config({
    path: './.env.testing'
});
//Provided API Token
const apiToken = process.env.APITOKEN;
//URL calling to the API
const baseURL = `https://superheroapi.com/api/${apiToken}`

//Adding middleware cors and express with app.use()
app.use(cors());
//parse the incoming request
app.use(express.json())

//Here we need to fix the req,res as parameters 
app.get('/', (req, res) =>
    //We don't need the req"request" we to send the res"response"
    res.send(`Heroes Backend running on ${PORT}`)
);
//Route for our server - We can add /?ids=1,2,3,4,5 or any other ids we would like 
app.get('/heroes', (req, res) => {
    // if there are no ids provided
    if (!req.query.ids) {
        res.status(400).send('valid ids are required');
        return;
    }

    // make an array of the ids provided
    let idsArr = req.query.ids.split(',')

    let heroes = [];
    //The fetchHero function takes index as a parameter 
    function fetchHero(index) {
        //If the index is strictly equal to the length of the idsArr array, only then it will stop running 
        if (index === idsArr.length) {
            //Jump out of the functionand return the heroes data
            res.json(heroes);
            return false;
        }
        // Set heroId to the index of the idsArr araay
        let heroId = idsArr[index];
        //When we run our fetch it will automaticlly be a GET request, as long as we dont pass any options like method: PUT/POST/DELETE 
        fetch(`${baseURL}/${heroId}`)
            //We need to add in our response from the fetch
            .then(res => res.json())
            //The data(hero) is pushing that data to the heroes array
            .then(hero => {
                heroes.push(hero);
                //The fetchHero function runs and adds 1 to the index so we grab the correct hero. The index starts at 0 so if we want to set the first index to 1 we have to add 1.
                fetchHero(index + 1);

            })
            //Handle if there is an error
            .catch(error => console.log('error getting hero', error));
    }
    //Calling the fetchHero function
    fetchHero(0);
});
//Our backend is running on http://localhost:3000
app.listen(PORT, () => { console.log(`Heroes backend listening on port ${PORT}`) })