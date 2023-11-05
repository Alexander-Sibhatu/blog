import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
        <nav className="nav">
            <Link to='/' className='nav_link'>Home</Link>
            <Link to='/show-blogs' className='nav_link'>All blogs</Link>
            <Link to='/add-blog' className='nav_link'>Create a blog</Link>
        </nav>
    )
}

export default NavBar