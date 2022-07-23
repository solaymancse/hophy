import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img2 from '../../images/nurse2.png'
import img3 from '../../images/nurse3.png'

import { FlexBox } from './../DoctorSlider/DoctorSliderElements';
import { NurseCard } from './../NurseCard/NurseCard';

export const NurseSlider = () => {
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
      breakpoint: { max: 464, min: 320 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel className="d-flex gap-3" responsive={responsive}>
        <FlexBox>
      
          <NurseCard
            name="Jupshi Barua"
            title="Senior Nurse at Park view Hospital Chittagong"
            img={img3}
            
          />
        </FlexBox>
        <FlexBox>
       
          <NurseCard
            name="Suptokoly Barua"
            title="Senior Nurse at Chattogram Medical College Hospital"
            img={img2}
          />
        </FlexBox>
       
       
      </Carousel>
    </div>
  );
};
