require('dotenv').config()
const mongoose = require('mongoose');


const { URI, DB, DB_USER, DB_PASS } = process.env;

const url = `${URI}/${DB}`;

const connectionObj = {
    authSource: "admin",
    user: DB_USER,
    pass: DB_PASS
}

mongoose.connect(url, connectionObj)
    .then(() => console.log(`Successfully Connected to DB: ${DB}`))
    .catch((error) => console.log(`Error connecting to Database`, error))