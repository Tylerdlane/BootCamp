const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("hello");
})
//REQ.PARAMS
app.get('/user/:userId', (req, res) => {
    const { userId } = req.params
    res.send(`Welcome USER ${userId}!`);
})

app.get("/music/:genre", (req, res) => {
    const { genre } = req.params;
    res.send(`Welcom to the ${genre} page!`)
})

app.get("/order/:food", (req, res) => {
    const { food } = req.params;
    let comments = {
        eggs: "Scramble Please",
        toast: "With butter please",
        juice: "Orange please"
    }
    let message = comments[food]
    res.send(`${message}`)
})
//http://localhost:3000/bank?name=Tyler&bankBalance=1000000
app.get('/bank', (req, res) => {
    // console.log(req.query)
    const { name, bankBalance } = req.query;
    if (name && bankBalance) {
        res.send(`Hey ${name}, give me $${bankBalance}. I know you have it!`)
    } else {
        res.send("Oh no! Go make some money, Honey!")
    }
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))

