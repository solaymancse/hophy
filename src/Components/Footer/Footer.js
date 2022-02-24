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
  NewsForm,P,WidgetSocial,InputDiv
} from "./FooterElements";
import logo from "../../images/brand4.png";
import { Button } from "react-bootstrap";
import { BsArrowRightCircleFill, BsArrowRightShort } from 'react-icons/bs'
import { Icons, Links } from "../Contact/ContactElements";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  const QuickList = [" World Health Organization"," World Health Organization"," World Health Organization"," World Health Organization"," World Health Organization"," World Health Organization"];
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
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without
                </p>
                <Contact>
                  <List>
                    <Map />
                    Chattogram Software Technology Park, 4100, Chittagong
                  </List>
                  <List>
                    <Mail />
                    hophycare@gmail.com
                  </List>
                  <List>
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
              <List>
                    <Map />
                    Lorem ipsum is a placeholder text commonly
                  </List>
                  <List>
                    <Mail />
                    Lorem ipsum is a placeholder text commonly
                  </List>
                  <List>
                    <Call />
                    Lorem ipsum is a placeholder text commonly
                  </List>
                  <List>
                    <Call />
                    Lorem ipsum is a placeholder text commonly
                  </List>
                 
            </div>
          </div>
          <div className="col-sm-6 col-md-6 offset col-lg-4 col-xl-3">
            <div className="widget-item">
              <H4>QUICK LINKS</H4>
              {QuickList.map((list)=> 
              <List href="https://www.who.int">
                    <BsArrowRightCircleFill />
                    {list}
                  </List>
             
             )}
            </div>
          </div>
          <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3">
            <div className="widget-item">
            <H4>NEWSLETTER</H4>
            <WidgetNews>
              <P>Sign up for our mailing list to get latest updates and offers.</P>
              <NewsForm className="input-btn-group">
                  <InputDiv>
                  <input style={{outLine:'none',border:'none'}}className="form-control" type="email" placeholder="Enter Your Email"></input>
                  <Button style={{marginRight:'-3px',background:"#34ACE1",outLine:'none',border:'none'}}><BsArrowRightShort/></Button>
                  </InputDiv>
              </NewsForm>
            </WidgetNews>
          <WidgetSocial>
          <Icons>
        <Links href="https://www.facebook.com/Hophystartup">
          <FaFacebookF />
        </Links>
        <Links href="https://www.youtube.com/channel/UCYZXfIIJVO4ZDOfTBHbZ26w">
          {" "}
          <AiFillYoutube />
        </Links>
        <Links href="https://www.instagram.com/hophystartup/">
          {" "}
          <IoLogoInstagram />
        </Links>
        <Links href="/">
          <FaWhatsapp />
        </Links>
        <Links href="hophystartup@gmail.com">
          {" "}
          <BiMailSend />
        </Links>
      </Icons>
          </WidgetSocial>
            </div>
          </div>
        </div>
 
    </Wrapper>
  );
};
