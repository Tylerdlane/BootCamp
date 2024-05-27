import React from 'react'

const randomColor = () => {
    const fontSize = Math.floor((Math.random() * 80)) + 20;
    const backgroundColor = ['red', 'green', 'blue',
          'black'][Math.floor(Math.random() * 4)];
          const randomColor = {
            fontsize: {fontSize},
            backgroundColor:{backgroundColor}
          }

  return (
    <div></div>
  )
}

export default randomColor