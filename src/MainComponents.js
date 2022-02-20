import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeSection } from './pages/HomeSection';
import { AboutSection } from './pages/AboutSection';
import { ServicesSection } from './pages/ServicesSection';
import { BlogSection } from './pages/BlogSection';
import { ContactSection } from './pages/ContactSection';



export const MainComponents = () => {
  return <>
  
  <Routes>
        <Route  path='/' element={ <HomeSection/>}/>
        <Route  path="/about" element={ <AboutSection/>}/>
        <Route  path='/services' element={ <ServicesSection/> }/>
        <Route  path="/blog" element={ <BlogSection/>}/>
        <Route  path='/contact' element={ <ContactSection/> }/>
      </Routes>
    
  </>;
};
