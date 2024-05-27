import { useState } from 'react'
import './App.css'
import Child from './Child'

function Parent(){
  const [name, newName] = useState("User");

  const handleInputChange = (event) => {
    newName(event.target.value)
}

  return (
    <div>
      <h1>Hello {name}</h1>
      <Child handleChange={handleInputChange}/>

    </div>
  )
}

export default Parent;
