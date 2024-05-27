import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import Layout from '/components/Layout'
import Home from '/components/Home'
import Services from '/components/Services'
import Contact from '/components/Contact'
import NoPage from '../components/NoPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
