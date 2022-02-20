import React from "react";
import { Navbar } from './../Components/Navbar/Navbar';
import { ScrollBtn } from './../Components/ScrollBtn/ScrollBtn';
import { HeroSection } from './../Components/HeroSection/HeroSection';
import { StaticMedia } from './../Components/StaticMedia/StaticMedia';
import { FeatureSection } from './../Components/FeatureSection/FeatureSection';
import { BookAppointment } from './../Components/BookAppointment/BookAppointment';
import { DoctorsArea } from './../Components/DoctorsArea/DoctorsArea';
import { Testomonial } from './../Components/Testomonial/Testomonial';
import { OurPartnar } from './../Components/OurPartnar/OurPartnar';
import { Blog } from "../Components/Blog/Blog";
import { Footer } from "../Components/Footer/Footer";
import { FooterBottom } from './../Components/FooterBottom/FooterBottom';
import { StickyNavbar } from "../Components/StickyNavbar/StickyNavbar";


export const HomeSection = () => {
  return (
    <>
      <StickyNavbar/>
      <Navbar />
    
      <ScrollBtn />
      <HeroSection />
      <StaticMedia />
      <FeatureSection />
      <BookAppointment />
      <DoctorsArea />
      <Testomonial />
      <OurPartnar />
      <Blog />
      <Footer />
      <FooterBottom />
    </>
  );
};
