import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black'>
      <div id='logo'>
        <img src="/diet.png" alt="logo" width={50} />
      <h2 style={{color:'black'}}>Recipe Finder App</h2>
      </div>
      <Link to={"/"}>

        Home</Link>
    </nav>
  )
}

export default Navbar