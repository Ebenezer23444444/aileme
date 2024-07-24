import React from 'react'
import { FaArrowDown, FaDropbox, FaSearch, FaUser } from 'react-icons/fa'
import { FaR } from 'react-icons/fa6'

function Nav() {
  return (
    <div>
    
        
    <div className=' bg-cyan-400  justify-center flex ' >
      <nav className=' inline-flex items-center gap-[20em] justify-center'>
      
        <ul className=' flex justify-center gap-[2em]  lg:text-2x1 md:text-2x1 sm:text-2x1 '>
          <li>Home</li>
          <li className=' flex items-center'>Features <FaArrowDown/></li>
          <li>About</li>
          <li>FAQ</li>
        </ul>

        <div>
        <p className=' inline-flex items-center  justify- '><FaUser/>Sign-in</p>
        <p className=' inline-flex items-center  justify- p-4'><FaSearch/>login-in</p>
        </div>
        
         

      </nav>
{/* <p><img src="Images/353.jpg" alt="" /></p> */}
    </div>
    </div>
  )
}

export default Nav
