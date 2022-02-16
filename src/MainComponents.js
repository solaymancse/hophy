import React from 'react';
import { HeroSection } from './Components/HeroSection/HeroSection';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import { Blog } from './Components/Blog/Blog';
import { Contact } from './Components/Contact/Contact';
import { StaticMedia } from './Components/StaticMedia/StaticMedia';
import { FeatureSection } from './Components/FeatureSection/FeatureSection';
import { BookAppointment } from './Components/BookAppointment/BookAppointment';
import { DoctorsArea } from './Components/DoctorsArea/DoctorsArea';
import { Testomonial } from './Components/Testomonial/Testomonial';
import { OurPartnar } from './Components/OurPartnar/OurPartnar';
import { Footer } from './Components/Footer/Footer';
import { FooterBottom } from './Components/FooterBottom/FooterBottom';
import { ScrollBtn } from './Components/ScrollBtn/ScrollBtn';


export const MainComponents = () => {
  return <>

    <Navbar/>
   
     <Routes>
       <Route  path='/'/>
       <Route  path="/about" element={ <About/>}/>
       <Route  path='/services' element={ <Services/> }/>
       <Route  path="/blog" element={ <Blog/>}/>
       <Route  path='/contact' element={ <Contact/> }/>
     </Routes>
      <ScrollBtn/>
      <HeroSection/>
      <StaticMedia/>
      <FeatureSection/>
      <BookAppointment/>
      <DoctorsArea/>
      <Testomonial/>
      <OurPartnar/>
      <Blog/>
      <Footer/>
      <FooterBottom/>
    
  </>;
};
