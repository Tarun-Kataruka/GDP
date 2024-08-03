import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
// import './App.css'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className=' overflow-x-hidden'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
