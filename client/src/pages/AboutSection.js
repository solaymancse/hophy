import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Navbar } from '../Components/Navbar/Navbar'
import { About } from './../Components/About/About';

export const AboutSection = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}
