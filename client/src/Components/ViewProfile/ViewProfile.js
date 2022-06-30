import React from "react";
import { Navbar } from "./../Navbar/Navbar";
import { Footer } from "./../Footer/Footer";

import {
  Wrapper,
  Left,
  Right,
  Top,
  Bottom,
  Img,
  H1,
  Span,
  Desc,
  Button,
  H2,
  Description,
  Degree,
  H3,
  H4
} from "./ViewProfileELement";
import { Container } from "react-bootstrap";
import img from "../../images/doctor.jpg";
import { docDegree } from "../../Data";
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";

export const ViewProfile = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Top>
              <div>
                <Img src={img} alt="" />
              </div>
              <div>
                <H1>Dr. Charlotte Deo</H1>
                <Span>Neurologist</Span>
                <Desc>
                  795 Folsom Ave, Suite 600
                  <br />
                  San Francisco, CADGE 94107
                </Desc>
              </div>
              <div>
                <Button>Book Appointment</Button>
              </div>
            </Top>
            <Bottom>
              <H4>Visiting Time</H4>
              <p>Tuesday<br/>06:00 PM - 10.00 PM</p>
              <p>Thursday<br/>06:00 PM - 10.00 PM</p>
              <H4>REVIEWS</H4>
              <p>Staff<br/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
            </Bottom>
          </Left>
          <Right>
            <H2>About</H2>
            <Description>
            Dr. Charlotte Deo Leon is a neurosurgeon in East Patchogue,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. He received his medical degree from Harvard Medical School and has been in practice for 21 years. He is one of 5 doctors at Brookhaven Memorial Hospital Medical Center and one of 9 at Southside Hospital who specialize in Neurological Surgery.
            </Description>
            <Degree>
              <H3>Qualifications</H3>
              <p>Hospital Affiliations: UCSF MEDICAL CENTER</p>
              <p>Medical School: Palmer College of Chiropractic 1978</p>
              <p>Residency: New york</p>
              <p>Certifications: Certified Chiropractic Sports Physician 1982</p>
              <p>Gender: Female</p>
              <p>Experience / Tranining: Past-President, Int. Fed. 1991</p>
              <p>Internship: Palmer Clinic</p>
              <H3>SPECIALTIES</H3>
              {docDegree.map((data)=> (
                <p><BsArrowRightShort/>{data.title}</p>
              ))}
         
            </Degree>
          </Right>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
