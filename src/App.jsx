import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Shared/Navbar'
import Homepage from './Pages/Homepage'
import Footer from './Components/Shared/Footer'
import CustumCurser from './Components/CustumCurser'
import './App.css'

const App = () => {
  return (
    <BrowserRouter> 
    <CustumCurser />
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
       
    
      </Routes>
     
    </div>
    <div id="contact">
      <Footer />
    </div>
  </BrowserRouter>
    
  )
}

export default App