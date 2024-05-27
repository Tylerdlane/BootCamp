import { useState } from 'react'
import './App.css'
import Clicker from './components/Clicker'

function App()  {
  

  const [number, randomNumber] = useState(1)

   
  const handleClick = (number) => {
   randomNumber(number);
  }
  return (
    
    <>
     <Clicker number={number} random={handleClick}/>
    </>
  )

}
export default App
