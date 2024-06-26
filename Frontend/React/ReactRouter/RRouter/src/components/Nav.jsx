import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
           
            <li><Link to="/">My Really Awesome Website</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/books" />Books</li>
       </ul>
    </nav>
    )
}

export default Nav