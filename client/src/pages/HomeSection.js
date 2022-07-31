import React, { useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { ScrollBtn } from "./../Components/ScrollBtn/ScrollBtn";
import { HeroSection } from "./../Components/HeroSection/HeroSection";
import { StaticMedia } from "./../Components/StaticMedia/StaticMedia";
import { FeatureSection } from "./../Components/FeatureSection/FeatureSection";
import { BookAppointment } from "./../Components/BookAppointment/BookAppointment";
import { DoctorsArea } from "./../Components/DoctorsArea/DoctorsArea";
import { Testomonial } from "./../Components/Testomonial/Testomonial";
import { OurPartnar } from "./../Components/OurPartnar/OurPartnar";
import { Blog } from "../Components/Blog/Blog";
import { Footer } from "../Components/Footer/Footer";
import { FooterBottom } from "./../Components/FooterBottom/FooterBottom";
import { NurseArea } from "../Components/NurseArea/NurseArea";
import { StickyNavbar } from "../Components/StickyNavbar/StickyNavbar";
import { Annoucment } from "../Components/Annoucment/Annoucment";
import { TopColumn } from "./../Components/TopColumn/TopColumn";
import { GetInTouch } from "./../Components/GetInTouch/GetInTouch";
import { BlogPost } from "./../Components/BlogPost/BlogPost";
import { Event } from "./../Components/Event/Event";

export const HomeSection = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <Annoucment
          closeModal={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      <StickyNavbar />
      <Navbar />
      <ScrollBtn />
      <HeroSection />
      <TopColumn />
      <StaticMedia />
      <FeatureSection />
      <BookAppointment />
      <DoctorsArea />
      <NurseArea />
      <Testomonial />
      <OurPartnar />
      <GetInTouch />
      <Blog />
      <BlogPost />
      <Event />
      <Footer />
      <FooterBottom />
    </>
  );
};
