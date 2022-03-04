import React, { useState } from "react";

import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Login } from "../Login/Login";

import { SignUp } from "../SignUp/SignUp";
import { Links, Bars, Div, Tooglebar } from "./NavMenuElements";
import { MobileViewNav } from './../MobileViewNav/MobileViewNav';

export const NavMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Nav className="me-auto">
        <Links exact to="/" >
          HOME
        </Links>
        <Links exact to="/services">
          SERVICES
        </Links>
        <Links exact to="/blog">
          BLOG
        </Links>
        <Links exact to="/about">
          ABOUT
        </Links>
        <Links exact to="/contact">
          CONTACT
        </Links>
      </Nav>
      <Div>
        <Login />
        <SignUp />
      </Div>
      <Tooglebar>
        <Bars onClick={handleShow} />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{<MobileViewNav />}</Offcanvas.Body>
        </Offcanvas>
      </Tooglebar>
    </Navbar>
  );
};
