import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
function App() {

  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
