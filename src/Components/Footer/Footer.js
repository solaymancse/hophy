import React from "react";

import {
  Wrapper,
  FooterLogo,
  Img,
  Contact,
  Map,
  Mail,
  Call,
  List,
  H4,
  WidgetNews,
  NewsForm,
  P,
  WidgetSocial,
  InputDiv,
  Arrow
} from "./FooterElements";
import logo from "../../images/brand5.png";
import { Button } from "react-bootstrap";
import { BsArrowRightShort, BsYoutube } from "react-icons/bs";
import { Icons, Links } from "../Contact/ContactElements";
import { FaFacebookF} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {

  return (
    <Wrapper>
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
          <div className="widget-item">
            <div className="about-widget">
              <FooterLogo>
                <a href="/">
                  <Img src={logo} alt="logo" />
                </a>
              </FooterLogo>
              <p className="mb-3">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>
              <Contact >
                <List to="/" color="#fff">
                  <Map color="#fff"/>
                  Chattogram Software Technology Park, 4100, Chittagong
                </List>
                <List to="/" color="#fff">
                  <Mail />
                  hophycare@gmail.com
                </List>
                <List to="/" color="#fff">
                  <Call />
                  +0123-45-67-890
                </List>
              </Contact>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 offset col-lg-4 col-xl-3">
          <div className="widget-item">
            <H4>RECENT POST</H4>
            <List to="/" color="#fff">
              <Map />
              Lorem ipsum is a placeholder text commonly
            </List >
            <List to="/" color="#fff">
              <Mail />
              Lorem ipsum is a placeholder text commonly
            </List>
            <List to="/" color="#fff">
              <Call />
              Lorem ipsum is a placeholder text commonly
            </List>
            <List to="/" color="#fff">
              <Call />
              Lorem ipsum is a placeholder text commonly
            </List>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 offset col-lg-4 col-xl-3">
          <div className="widget-item">
            <H4>QUICK LINKS</H4>
           
              <List to="/terms&condition" color="#fff">
                <Arrow />
                Terms and Condition
              </List>
                <List to="/privacy&policy" color="#fff">
              <Arrow />
                Privacy Policy
              </List>
              <List to="/" color="#fff">
                <Arrow />
                Refund Policy
              </List>
              <List to="/" color="#fff">
                <Arrow />
                Security
              </List>
              <List to="/mission&vission" color="#fff">
                <Arrow />
               Mission & Vission
              </List>
              <List to="/" color="#fff">
                <Arrow />
                Contact Us
              </List>
            
          </div>
        </div>
        <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3">
          <div className="widget-item">
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
    </Wrapper>
  );
};
