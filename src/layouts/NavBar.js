import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
        <nav className="nav">
            <NavLink to='/' className='nav_link'>Home</NavLink>
            <NavLink to='/show-blogs' className='nav_link'>All blogs</NavLink>
            <NavLink to='/add-blog' className='nav_link'>Create a blog</NavLink>
        </nav>
    )
}

export default NavBar