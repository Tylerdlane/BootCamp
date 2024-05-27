import React from 'react'

const Greeting = ({name}) => {
let isDarkMode = true;
const friendStyle = {
  padding: '1em',
  margin: '.5em 2em 0 2em',
  backgroundColor: "grey",
  color: isDarkMode ? 'black' : 'white',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50px',
}
  return (
    <div className="friends container mt-5 display-4" style={friendStyle}>
        <h1>Hello, {name}!</h1>
    </div>
  )
}

export default Greeting