import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DoctorCard } from "../DoctorCard/DoctorCard";


export const DoctorSlider = () => {
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div> <DoctorCard name="Dr. Kristina Castle" deg="This is a wider card with supporting text below as a natural lead-in to additional content."/></div>
        <div> <DoctorCard name="Dr. Kristina Castle" deg="This is a wider card with supporting text below as a natural lead-in to additional content."/></div>
        <div> <DoctorCard name="Dr. Kristina Castle" deg="This is a wider card with supporting text below as a natural lead-in to additional content."/></div>
        <div> <DoctorCard name="Dr. Kristina Castle" deg="This is a wider card with supporting text below as a natural lead-in to additional content."/></div>
        
       
      </Carousel>
    </div>
  );
};
