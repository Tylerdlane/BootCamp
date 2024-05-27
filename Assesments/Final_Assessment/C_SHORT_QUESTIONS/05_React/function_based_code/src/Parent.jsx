import { useState } from 'react'
import Child from './Child'

function Parent(){
  const [ name, setName ] = useState("")

  return (
    <div>
      {/* Name is set by the handle change "User input" */}
      <h1>Hello {name}</h1>
      {/* We need to add the handleChange event on the child component passed as a prop. This event will call the function setName and update the value of name when input field is changed */}
      <Child 
      handleChange={(event) => setName(event.target.value)} />
    </div>
  )
}

export default Parent