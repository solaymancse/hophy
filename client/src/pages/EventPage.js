import React from 'react'
import { Navbar } from './../Components/Navbar/Navbar';
import { Event } from './../Components/Event/Event';
import { Footer } from './../Components/Footer/Footer';

export const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <Event/>
        <Footer/>
    </div>
  )
}
