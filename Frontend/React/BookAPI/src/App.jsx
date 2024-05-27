import { useState } from 'react'
import './App.css'
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      author: 'Tyler Lane',
      title: "The Big One",
      category: "Tech"
    }
  ])
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = (searchTerm) => {

    const baseUrl = 'https://gbpyaddxc1.execute-api.us-west-1.amazonaws.com/dev/books'
    const route = `/${searchTerm}`
    const endpoint = baseUrl + route;



    fetch(endpoint)
      .then(response => {
        if (response.ok && response.status === 200) {
          return response.json()
        } else {
          throw Error("Oops something went wrong")
        }
      })
      .then(data => {
        console.log(data)
        setBooks(data.results)
        setSearchTerm("")
      })
      .catch(error => {
        console.log("error during fetch:", error)
      })
  }

  const serachChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }



  return (
    <>
      <h1>My Libaray</h1>
      <form>
        <input type="text" placeholder="Search for a Book by title, author, or category" onChange={serachChangeHandler} value={searchTerm} />
        <button onClick={() => performSearch(searchTerm)}>Search</button>
      </form>
        {
          books.map(book => (
            < Book key={book.id}
              id={book.id}
              author={book.author}
              title={book.title}
              category={book.category} />
          ))
        }
    </>
  )
}

export default App
