import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Nav'
import Search from './Component/Search'
import Home from './Component/Home'
import Third from './Component/Third'
import Slide2 from './Component/Slide2'
import Yellow from './Component/Yellow'
import Slide3 from './Component/Slide3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      

      <Nav/>
      <Search/>
      <Home/>
      <Third/>
      <Slide2/>
      <Yellow/>
      <Slide3/>
      
    </>
  )
}

export default App
