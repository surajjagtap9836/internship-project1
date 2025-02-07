import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header>
            <nav className='navbar'>
                <div className='text'>
                 <p className='name'>Navbar</p>
                </div>
              <ul className='list'>
                <li className='li'> <NavLink to="/" className='link' >Home</NavLink></li>
                <li className='li'> <NavLink to="/about"className='link' >About</NavLink></li>
                <li className='li'> <NavLink to="/contact"className='link' >Contact</NavLink></li>
              </ul>
              <NavLink to="/login" ><button type='button' className='login'>Login</button></NavLink> 
            </nav>
            
        </header>
    </div>
  )
}

export default Navbar
