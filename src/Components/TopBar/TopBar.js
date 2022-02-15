import React from "react";
import { Container } from "../Container/ContainerElements";
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
import brand2 from "../../images/brand3.png";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

export const TopBar = () => {
  return (
    <Wrapper className="mobile-sticky">
      <Container>
        <div className="row">
          <div className="col-12">
            <Content>
              <Logo>
                <Img src={brand2} alt="logo" />
              </Logo>
              <Media className="d-none d-lg-flex">
              <Col>
                <Icon>
                  <AiOutlineClockCircle />
                </Icon>
                <div>
                  <H3>WORKING HOURS</H3>
                  <H1>SAT - FRI : 9.00 - 10.00</H1>
                </div>
              </Col>
              <Col>
                <Icon>
                  <BsTelephoneFill />
                </Icon>
                <div>
                  <H3>HOTLINE 24/7</H3>
                  <H1>+0123-45-67-890</H1>
                </div>
              </Col>
              <Col>
                <Icon>
                  <AiOutlineMail />
                </Icon>
                <div>
                  <H3>EMAIL US</H3>
                  <H1>HOPHY@GMAIL.COM</H1>
                </div>
              </Col>
              </Media>
            </Content>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
