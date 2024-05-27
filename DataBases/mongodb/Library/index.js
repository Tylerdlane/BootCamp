require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const morgan = require('morgan')
//Foundation

//Connection string
const connectionString = process.env.MONGODB_URI


//DB Connection
mongoose.connect(connectionString)
    .then(() => {
        console.log("Successfully connected to database")
    })
    .catch((error) => {
        console.log("Error connecting to the DB:", error)
    })

//Bring in our model
const BookModel = require('./models/book')



//Middleware
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send("I am GROOT Route")
})
// Read -- Get all books back
app.get('/books', (req, res) => {
    BookModel.find()
        .then(data => {
            res.status(200).json({ message: "Success", data })
        })
        .catch(error => {
            console.log("Error reading:", error)
            res.status(500).json({ message: "No book to be found!" })
        })
})

//Read -- Get books by category
app.get('/books/:category', (req, res) => {
    const { category } = req.params;

    BookModel.find({ category: category })
        .then(books => {
            if (books.length === 0) {
                res.status(404).json({ message: "Failure: No Books Found in this Category" })
            }
            res.status(200).json({ message: "Success", books })
        })
        .catch(error => {
            console.log("Error reading by category:", error)
            res.status(500).json({ message: "Sever Error: No book to be found in this Category!" })
        })
})

//Create - Create a single book
app.post('/books', (req, res) => {
    const { title, author, category } = req.body
    if (title && author && category) {
        //Call to our DB
        const newBook = {
            title: title,
            author: author,
            category: category
        }
        //Save to our DB
        BookModel.create(newBook)
            .then(createdBook => { res.status(201).json({ message: " Success new book created!", createdBook }) })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: "Server Error: Failed to create new Book" })
            })

    } else {
        res.status(400).json({ message: "Failure: New book NOT created" })
    }
})

//Update -- Update Book by ID
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedFields = req.body; //Fields to be updated

    //Find book by its id
    BookModel.findById(bookId)
        .then(book => {
            if (!book) {
                res.status(404).json({ message: "Error, Book NOT Found" })
            }
            //Loop Through the KEYS coming from req.body
            Object.keys(updatedFields).forEach(key => {
                //Make sure the value is not undefined
                if (updatedFields[key] !== undefined) {
                    // We will update
                    book[key] = updatedFields[key]
                }
            })

            //Save it back to our DB
            return book.save()
        })
        .then(updated => {
            res.json({ message: "Success", updated })
        })
        .catch(error => {
            console.log("Updating Error:", error)
            res.status(500).json({ message: "Server Error: Failed to update" })
        })
})

//Delete -- Delete Book by ID
app.delete('/books/:id', (req, res) => {
    //Assigning the books ID to a variable 
    const bookId = req.params.id;
    BookModel.findByIdAndDelete(bookId)
        .then(deletedBook => {
            if (!deletedBook) {
                res.status(404).json({ message: "Error, Book NOT Found" })
            } else {
                res.json({ message: "Success: Book Deleted", deletedBook })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error", error })
        })

})
//Listener
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));