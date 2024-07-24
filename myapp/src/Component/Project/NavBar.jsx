import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
// import { FaUser } from 'react-icons/fa6'


function NavBar() {
    
  return (
    <div className='NavBar'>
        <div>fumi</div>
        <nav>
           <ul>
           <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
            <FaUser/>
            <FaShoppingCart/>
            
            
           </ul>
        </nav>
      
    </div>
  )
}

export default NavBar
