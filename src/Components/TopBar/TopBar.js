import React from "react";

import {
  Wrapper,
  Content,
  Img,
  Media,
  Col,
  H3,
  H1,
  Icon,
  Logo
} from "./TopBarElements";
import logo from "../../images/brand5.png";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

export const TopBar = () => {
  return (
    <Wrapper className="mobile-sticky">
        <div className="row">
          <div className="col-12">
            <Content>
              <Logo>
                <Img src={logo} alt="logo" />
              </Logo>
              <Media className="d-none d-lg-flex">
              <Col >
                <Icon color="#fff">
                  <AiOutlineClockCircle />
                </Icon>
                <div>
                  <H3 color="#ccc">WORKING HOURS</H3>
                  <H1 color="#fff">SAT - FRI : 9.00 - 10.00</H1>
                </div>
              </Col>
              <Col>
                <Icon color="#fff">
                  <BsTelephoneFill />
                </Icon>
                <div>
                  <H3 color="#ccc">HOTLINE 24/7</H3>
                  <H1 color="#fff">+880193-40-61-718</H1>
                </div>
              </Col>
              <Col>
                <Icon color="#fff">
                  <AiOutlineMail />
                </Icon>
                <div>
                  <H3 color="#ccc">EMAIL US</H3>
                  <H1 color="#fff">HOPHYSTARTUP@GMAIL.COM</H1>
                </div>
              </Col>
              </Media>
            </Content>
          </div>
        </div>
    </Wrapper>
  );
};
