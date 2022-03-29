import React, { useState } from "react";

import { Nav,Navbar, Offcanvas } from "react-bootstrap";
import { Login } from "../Login/Login";

import { SignUp } from "../SignUp/SignUp";
import { Links, Bars, Div, Tooglebar,Item } from "./NavMenuElements";
import { MobileViewNav } from './../MobileViewNav/MobileViewNav';

export const NavMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Nav className="me-auto">
       <Item>
       <Links  to="/" >
          HOME
        </Links>
       </Item>
       <Item>
       <Links  to="/services">
          SERVICES
        </Links>
       </Item>
       <Item>
       <Links  to="/blog">
          BLOG
        </Links>
       </Item>
       <Item>
       <Links  to="/about">
          ABOUT
        </Links>
       </Item>
       <Item>
       <Links  to="/contact">
          CONTACT
        </Links>
       </Item>
       
        
        
      
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
