const express = require("express"); //BRING IN OUR PACKAGE AND ASSIGN IT TO EXPRESS
const app = express(); //CREATE AN INSTANCE OF THE EXPRESS APPLICATION
const PORT = process.env.PORT || 3000; //DEFINES THE PORT NUMBER FOR THE SERVER TO LISTEN ON

//FOUNDATION ^^^^^^

//TELLS EXPRESS TO SERVE STATIC FILES FROM THE PUBLIC FOLDER . EXPRESS.STATIC IS A FUNCTION AKA MIDDLEWARE
app.use(express.static('public'));


// DEFINE A "ROUTE" FOR HANDLING HTTP GET REQUEST TO THE ROOT PATH
//get post put delete
app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  res.send("I WAS REDIRECTED")
})
app.get("/about", (req, res) => {
  res.send("YOU ARE ON THE ABOUT ROUTE");
});
app.get("/about", (req, res) => {
  res.send("YOU ARE ON THE 2ND ABOUT ROUTE");
});
//FIRST ARGUMENT IS THE REQUEST AND THE 2ND IS THE RESPONSE
app.get("/contact", (req, res) => {
  res.send("YOU ARE ON THE CONTACT PAGE");
});
app.get("*", (req, res) => {
  res.send("THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST! ARE YOU LOST?")
})
//LISTENER
app.listen(PORT, () => console.log(`Basic Server on PORT: ${PORT}`));
