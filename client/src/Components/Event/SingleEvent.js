import React from 'react'
import { Navbar } from './../Navbar/Navbar';
import { Footer } from './../Footer/Footer';
import { Container } from 'react-bootstrap';

export const SingleEvent = () => {
  return (
    <div>
        <Navbar/>
        <Container>
            <h1>Event</h1>

        </Container>
        <Footer/>
    </div>
  )
}
