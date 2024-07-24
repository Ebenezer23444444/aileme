import React from 'react'
import NavBar from './Component/Project/NavBar'

import Hero from './Component/Project/Hero'
import Gallery from './Component/Project/Gallery'
import Choose from './Component/Project/Choose'
import Last from './Component/Project/Last'
import Another from './Component/Project/Another'

function Menu() {
  return (
    <div>
        
        <NavBar/>
        <Hero/>
        <Gallery/>
        <Choose/>
        <Last/>
        <Another/>

    </div>
  )
}

export default Menu
