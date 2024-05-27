//Import the built-in modules 'fs' and 'crypto'
const fs = require('fs');
const crypto = require('crypto');
// The FILE PATH OF THE JAVASCRIPT FILE TO READ
const inputFile = './text.txt';
// DEFINE THE PATH AND CONTENTS OF THE NEW FILE
const outputFile = './encoded.txt';

let text = ""; // global context to allow data from file to be saved

// USE THE fs.READfILE() FUNCTION TO READ THE FILE CONTENTS
fs.readFile(inputFile, 'utf8', (error,data)=>{
    if(error) console.log('Oops, something went wrong while reading the file.');
    else{
        console.log('The file contents are:', data);
        text = data //assigns text from the file to global text variable
    }
});

//DEFINE A KEY AND INITIALIZATION VECTOR FOR THE ENCRYPTION
const key = 'doggyHorsedoggyHorsedoggyHorse12';
const iv = crypto.randomBytes(16);

//CREAT A NEW CIPHER USING 'crypto.createCipheriv()'
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

//ENCRYPT THE FILE CONTENTS USING THE CIPHER
let encryptredContents = cipher.update(inputFile, 'utf8', 'hex');
encryptredContents += cipher.final('hex');
// WRITE THE ENCRYPTED CONTENTS TO A NEW FILE USIING 'fs'
fs.writeFile(outputFile, encryptredContents, function(error){
    if(error){
        console.log('Something went wrong while saving the file');
    } else {
        console.log('Great the file has been saved');
    }
});
