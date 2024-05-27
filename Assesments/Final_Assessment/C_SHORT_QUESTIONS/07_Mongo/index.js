const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

//Bring in our models
const UserModel = require('./model/schema')
const MessageModel = require('./model/schema')

//HTTP POST request to create a new user
app.post('/newUser', (req, res) => {
    const { username } = req.body
    if (username) {
        const newUser = {
            username: username,
        }
        UserModel.create(newUser)
            .then(user => { res.status(201).json({ message: " Success new user created!", user }) })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: "Server Error: Failed to create new User" })
            })

    } else {
        res.status(400).json({ message: "Failure: New User NOT created" })
    }
})
//HTTP POST request to create a new message
app.post('/newMessage', (req, res) => {
    const { title, content } = req.body;
    if (title, content) {
        const newMessage = {
            title: title,
            content: content,
        }
        MessageModel.create(newMessage)
            .then(message => {
                res.status(201).json({ message: "Success new message created!", message })
                    .catch(error => {
                        console.log(error.status(500).json({ message: "Server error" }))
                    })
            })
    }
});
//HTTP GET request to get back all messages with the same user.id and sort by the time stamp -1 to get the most recent message
app.get('/userMessage', (req, res) => {
    MessageModel.find({ user: user._id }).sort({ timestamp: -1 })
        .then(message => { res.status(200).json({ message: "Success", message }) })
        .catch(error => {
            console.log(error.status(500).json({ message: "Error Server error" }))
        })
});
