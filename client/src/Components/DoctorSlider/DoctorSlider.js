import React from "react";

import img1 from '../../images/doc_1.png'
import img2 from '../../images/doc_2.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DoctorCard } from "../DoctorCard/DoctorCard";
import { FlexBox } from "./DoctorSliderElements";

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
      breakpoint: { max: 464, min: 320 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel className="d-flex gap-3" responsive={responsive}>
        <FlexBox>
          {" "}
          <DoctorCard
            name="Dr. Sushanta Barua"
            deg="MBBS, DCH(CU)
            PGPN(BOSTON, USA)
            CONSULTANT (CHILD HEALTH)
            "
              img={img1}
          />
        </FlexBox>
        <FlexBox>
          {" "}
          <DoctorCard
            name="Dr. Promise Barua"
            deg="Intern at BGC TRUST MEDICAL COLLEGE"
            img={img2}
          />
        </FlexBox>
        <FlexBox>
          {" "}
          <DoctorCard
            name="Dr. Kristina Castle"
           deg="MBBS, DCH(CU)
            PGPN(BOSTON, USA)
            CONSULTANT (CHILD HEALTH)
            "
          />
        </FlexBox>
        <FlexBox>
          {" "}
          <DoctorCard
            name="Dr. Kristina Castle"
            deg="MBBS, DCH(CU)
            PGPN(BOSTON, USA)
            CONSULTANT (CHILD HEALTH)
            "
          />
        </FlexBox>
      </Carousel>
    </div>
  );
};
