import React, { useEffect } from "react";
import { Container } from "./../Container/ContainerElements";
import {
  P,
  ConText,
  Wrapper,
  Items,
  Content,
  Img,
  Thumb,
  H1,
  H2,
  Span,
  Div,
  Notes,
  UserMd,
  Microscope,
  MedicalDrip,
  Ambulance,
  Wheelchair,
} from "./FeatureSectionElements";
import doctor from "../../images/doctor-01.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const FeatureSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <div className="row" data-aos="fade-down">
          <div className="col-lg-12">
            <Div>
              <P>Why Choose Hophy Platform</P>
              <H2>
                <Span>The Best</Span> For Your Health{" "}
              </H2>
            </Div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-8">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <Notes />
                  <H1>MEDICAL COUNSELING</H1>
                  <Content>
                    <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <UserMd />
                  <H1>TOP LEVEL DOCTORS</H1>
                  <Content>
                  <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <Microscope />
                  <H1>MEDICAL FACILITES</H1>
                  <Content>
                  <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <MedicalDrip />
                  <H1>24 HOURS SERVICES</H1>
                  <Content>
                  <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <Ambulance />
                  <H1>PERSONAL SERVICES</H1>
                  <Content>
                  <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Items>
                  <Wheelchair />
                  <H1>DEDICATED PATIENT CARE</H1>
                  <Content>
                  <ConText>Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface
                    without</ConText>
                  </Content>
                </Items>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Thumb data-aos="fade-left">
        <Img src={doctor} />
      </Thumb>
    </Wrapper>
  );
};
