import React, {useEffect} from "react";
import { Wrapper } from "./TestomonialElements";
import { H2, P, SecTitle } from "../DoctorsArea/DoctorsAreaElements";
import { Span } from "../FeatureSection/FeatureSectionElements";
import { TestimonialSlider } from "../TestimonialSlider/TestimonialSlider";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from 'react-bootstrap';
export const Testomonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <SecTitle data-aos="fade-down">
              <P>TESTIMONIAL</P>
              <H2>
                <Span>Trusted</Span> From Clients
              </H2>
            </SecTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <TestimonialSlider />
          </div>
        </div>
        </Container>
    </Wrapper>
  );
};
