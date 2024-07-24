import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myreact from './Component/Myreact'
import About from './Component/About'
import Event from './Component/Event'
import Testing from './Component/Testing'
import Mygroceries from './Component/Mygroceries'
import Navbar from './Component/Navbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Myreact/>
      <About/>
      <Event/>
      <Testing/>
      <Newgroceries/>
      <Mygroceries/>
      <Navbar2/>
      
    </>
  )
}

export default App
