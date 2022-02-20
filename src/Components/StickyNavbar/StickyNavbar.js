import React from 'react'
import { Container } from './StickyNavbarElements';
import './Sticky.css'


export const StickyNavbar = () => {

  return (
    <>
      <div className='header-bottom sticky-header d-none d-lg-block sticky'>
        <Container>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='d-flex flex-wrap align-items-center justify-content-between'>

                <h1>Navbar</h1>
                <h2>Button</h2>
              </div>
            </div>

          </div>
        </Container>
      </div>
        
    </>
  )
}
