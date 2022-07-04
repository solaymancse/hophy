import React from "react";
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
import styled from "styled-components";

// import { Annoucment } from "../Components/Annoucment/Annoucment";
import { TopColumn } from './../Components/TopColumn/TopColumn';
import { GetInTouch } from './../Components/GetInTouch/GetInTouch';
import { BlogPost } from './../Components/BlogPost/BlogPost';




const Div = styled.div`
  position: relative;
`;
// const AnnoucmentContainer = styled.div`
//   position: absolute;
//   top: 550px;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   background-color: #fff;
//   width: 600px;
//   height: 400px;
//   z-index: 1;
// `;

export const HomeSection = () => {
  // const [open, setOpen] = useState(true);

 

 

  return (
    <Div>
     {/* { open &&  <AnnoucmentContainer>
      <Annoucment closeModal={setOpen}/>
      </AnnoucmentContainer>} */}
      <StickyNavbar />
      <Navbar />
      <ScrollBtn />
      <HeroSection />
      <TopColumn/>
      <StaticMedia />
      <FeatureSection />
      <BookAppointment />
      <DoctorsArea />
      <NurseArea />
      <Testomonial />
      <OurPartnar />
      <GetInTouch/>
      <Blog />
      <BlogPost/>
      <Footer />
      <FooterBottom />
    </Div>
  );
};
