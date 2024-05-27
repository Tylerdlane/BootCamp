import React from 'react'
//Created a component called Heroes, passing and destructuring the props(name, id, full_name, and the image'url')
const Heroes = ({name, id, full_name, image}) => {
  return (
    //Return the characters Name/Picture/Full-Name with the given ids in the URL
    <div className='border' key={id}>
        <h4>{name}</h4>
        <img src={image}/>
        <p>{full_name}</p>
    </div>
  )
}

export default Heroes