import { useState } from 'react'
import './App.css'
import UserInputForm from './components/UserInputForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserInputForm />
    </>
  )
}

export default App
