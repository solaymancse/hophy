import React from "react";

import { Container } from "react-bootstrap";
import {
  Wrapper,
  FooterLogo,
  Contact,
  List,
  H4,
  WidgetNews,
  NewsForm,
  P,
  WidgetSocial,
  InputDiv,
  Links,
} from "./FooterElements";
import { Button } from "react-bootstrap";
import { BsArrowRightShort, BsYoutube,BsArrowRightCircleFill } from "react-icons/bs";
import { Icons } from "../Navbar/Contact/ContactElements";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { footerData, footerPostData, footerLinkData } from "./../../Data";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <div className="widget-item">
              <div className="about-widget">
                <FooterLogo>
                  <H4>Who are we</H4>
                </FooterLogo>
                <p className="mb-3">
                HophyCare is a Bangladeshi HealthTech StartUp. For the first time, we are providing a complete healthcare ecosystem in your home.
                </p>
                <Contact>
                  {footerData.map((data, index) => (
                    <List key={index} to={data.link}>
                      <icon>{data.icon}</icon>
                      {data.title}
                    </List>
                  ))}
                </Contact>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 offset col-lg-4 col-xl-3">
            <div className="widget-item">
              <H4>Medical Services</H4>
              {footerPostData.map((data, index) => (
                <List key={index} to="/" color="#fff">
                  <BsArrowRightCircleFill />
                  {data.title}
                </List>
              ))}
            </div>
          </div>
          <div className="col-sm-6 col-md-6 offset col-lg-4 col-xl-3">
            <div className="widget-item">
              <H4>QUICK LINKS</H4>
              {footerLinkData.map((data) => (
                <List to={data.link}>
                  <BsArrowRightCircleFill />
                  {data.title}
                </List>
              ))}
            </div>
          </div>
          <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3">
            <div>
              <H4>NEWSLETTER</H4>
              <WidgetNews>
                <P>
                  Sign up for our mailing list to get latest updates and offers.
                </P>
                <NewsForm className="input-btn-group">
                  <InputDiv>
                    <input
                      style={{ outLine: "none", border: "none" }}
                      className="form-control"
                      type="email"
                      placeholder="Enter Your Email"
                    ></input>
                    <Button
                      style={{
                        marginRight: "-3px",
                        background: "#34ACE1",
                        outLine: "none",
                        border: "none",
                      }}
                    >
                      <BsArrowRightShort />
                    </Button>
                  </InputDiv>
                </NewsForm>
              </WidgetNews>
              <WidgetSocial>
                <Icons>
                  <Links href="https://www.facebook.com/Hophycare">
                    <FaFacebookF />
                  </Links>
                  <Links href="https://www.youtube.com/channel/UCYZXfIIJVO4ZDOfTBHbZ26w">
                    <BsYoutube />
                  </Links>
                  <Links href="https://www.instagram.com/hophystartup/">
                    <IoLogoInstagram />
                  </Links>

                  <Links href="https://www.linkedin.com/company/hophycare/?viewAsMember=true">
                    <AiFillLinkedin />
                  </Links>
                </Icons>
              </WidgetSocial>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
