import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Services from './Components/Services'
import Hero from './Components/Hero'
import About from './Components/About'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import WorkingStep from './Components/WorkingStep'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <WorkingStep/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
     
    </div>
    
      
    </>
  )
}

export default App
