import React, { useEffect } from "react";
import { DoctorSlider } from "../DoctorSlider/DoctorSlider";


import { Span } from "./../FeatureSection/FeatureSectionElements";
import { Wrapper, SecTitle, P, H2 } from "./DoctorsAreaElements";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from 'react-bootstrap';
export const DoctorsArea = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <SecTitle data-aos="fade-up">
              <P>MEET OUR DOCTORS</P>
              <H2>
                <Span>Professional & </Span> Enthusiastic
              </H2>
            </SecTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">{<DoctorSlider />}</div>
        </div>
      </Container>
    </Wrapper>
  );
};
