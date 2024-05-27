import React from 'react'

const Clicker = ({number, random}) => {

    const genRandom = (number) => {
        let rand = Math.floor(Math.random() * 10) +1;

        random(rand);
    }
  
  return (
    <div>
      <h1>Number is : {number}</h1>
       { number === 7 ? <h2>Winner Winner Chicken Dinner</h2> : <button onClick={() => genRandom()}>Random Number</button>}
     </div>
  )
}

export default Clicker