import React, { useState } from "react";

import { Offcanvas } from "react-bootstrap";

import { MobileViewNav } from "../../MobileViewNav/MobileViewNav";
import {
  Wrapper,
  Content,
  Img,
  Media,
  Col,
  H3,
  H1,
  Icon,
  Logo,
} from "./TopBarElements";
import { Bars, Tooglebar } from "./TopBarElements";
import logo from "../../../images/brand5.png";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

export const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Wrapper>
      <div className="row">
        <div className="col-12">
          <Content>
            <Logo>
              <Img src={logo} alt="logo" />
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
                  <H1>+880193-40-61-718</H1>
                </div>
              </Col>
              <Col>
                <Icon>
                  <AiOutlineMail />
                </Icon>
                <div>
                  <H3>EMAIL US</H3>
                  <H1>HOPHYSTARTUP@GMAIL.COM</H1>
                </div>
              </Col>
            </Media>
            <Tooglebar>
              <Bars onClick={handleShow} />
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{<MobileViewNav />}</Offcanvas.Body>
              </Offcanvas>
            </Tooglebar>
          </Content>
        </div>
      </div>
    </Wrapper>
  );
};
