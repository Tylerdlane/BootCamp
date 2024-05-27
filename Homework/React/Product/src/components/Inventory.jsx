import React from 'react'

const Inventory = ({name, price, isInStock}) => {
  return (
    <div>
        <ul>
            <li>{name} ${price} {isInStock}</li>
        </ul>
    </div>
  )
}

export default Inventory