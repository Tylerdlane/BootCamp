import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Landing from './pages/Landing'
import Contact from './pages/Contact' 
import NoPage from './pages/NoPage'
import Books from './pages/Books'
import Book from './pages/Book'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Landing />} /> 
    <Route path="/home" element={<Home />} /> 
    <Route path="/about" element={<About />} /> 
    <Route path="/contact" element={<Contact />} /> 
    <Route path="/books" element={<Books />} />
    <Route path="/books/:id" element={<Book />} />
    <Route path="*" element={<NoPage />} />

     </Routes>
    </>
  )
}

export default App
