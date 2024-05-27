import React from 'react'

const Book = ({title, author, category, id}) => {
  return (
    <div key={id} style={ { marginBottom: "5rem" } }>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Category: {category}</p>
    </div>
  )
}

export default Book