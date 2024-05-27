const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
//Bring In our Mock Data to simulate a DB
const books = require('./Libaray/books')

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors());


//ROUTES
app.get('/', (req, res) => {
    res.send('I am GROOT route')
})
app.get('/books', (req, res) => {
    res.status(200).json(books);
})
//READ GET BOOK BY ID

app.get('/books/:id', (req, res) => {
    //CONVERT STRING TO NUM 
    const id = parseInt(req.params.id);
    //FIND THE REQUESTED OBJECT IN OUR ARRAY VIA PROPERTY ID
    const book = books.find(book => book.id === id);

    if (!book) {
        //IF THE BOOK IS UNDEFINED 
        res.status(404).json({ error: "Book Not Found" })
    } else {
        res.status(200).json(book);
    }
})
//GET BOOK BACK BY CATEGORY 
app.get('/books/category/:category', (req, res) => {
    const { category } = req.params
    const results = books.filter(book => book.category.toLowerCase() === category.toLowerCase())
    if (results.length === 0) {
        res.status(404).json()
    }
    res.json(results)
})

//CREATE A NEW BOOK - POST
app.post('/books', (req, res) => {
    //WE ONLY WANT TO CREAT A BOOK IF THE USER HAS GIVNE US ALL # VALUES OF TITLE< AUTHOR< AND CATEGORY
    const { title, author, category } = req.body
    //IF WE HAVE ALL THE VALLUES
    if (title && author && category) {
        //BUILD OUR BOOK OBJECT 
        const newBook = {
            id: Date.now(),
            title: title,
            author: author,
            category: category
        }

        books.push(newBook)
        res.status(201).json({ message: "Success New Book Created", newBook })
    } else {
        res.status(400).json({ message: "Failure, New book NOT created" })
    }

})

//Updated BOOK - PUT method
app.put('/books/:id', (req, res) => {
    //GET BOOK THROUGH ID
    const bookId = parseInt(req.params.id);
    //FIND ITS INDEX
    const index = books.findIndex(b => b.id === bookId)
    const updatedBook = req.body;
    //SEE IF THERE IS A BOOK WITH THAT ID TO UPDATE
    if (index !== -1) {
        //TAKE OUR CURRENT BOOK VALUES AND SPREAD IT INTO THE UPDATED BOOK
        books[index] = {
            ...books[index],
            title: updatedBook.title || books[index].title,
            author: updatedBook.author || books[index].author,
            category: updatedBook.category || books[index].category
        };
        res.status(201).json({ message: "Success updating", updated: books[index] })
    } else {
        res.status(404).json("Error book not found!")

    }

})
//CUD
//READ- Send all books back
app.get('/books', (req, res) => {
    res.status(200).json(books)
})

//DELETE BOOK BY ID
app.delete('/books/:id', (req, res) => {
    //GETTING THE BOOK ID TO DELETE
    const bookId = parseInt(req.params.id);
    const deleteBookIndex = books.findIndex(b => b.id === bookId);

    if (deleteBookIndex !== -1) {
        const deletedBook = books.splice(deleteBookIndex, 1)
        res.status(200).json({ message: "Success, BOOK DELETED", deletedBook: deletedBook[0] })
    } else {
        res.status(404).json({ message: "Book NOT found" })
    }

})

//LISTENER
const server = app.listen(PORT, () => console.log(`You're running on Port:${PORT}`));

module.exports = server;
