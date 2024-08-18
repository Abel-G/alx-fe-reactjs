import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
function App() {
    return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>

  )
}

export default App
