import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar({contacts}) {
  return (
    <nav className='nav'>
        <Link className='nav-links' to='/home'>Home</Link>
        <Link className='nav-links' to='/newContact'>New</Link>
    </nav>
  )
}

export default Navbar
