import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "./NavMenuElements";

export const NavMenu = () => {
  return (
    <Navbar>
          <Nav className="me-auto">
            <Link href="#home">HOME</Link>
            <Link href="#home">SERVICES</Link>
            <Link href="#features">BLOG</Link>
            <Link href="#pricing">ABOUT</Link>
            <Link href="#pricing">CONTACT</Link>
          </Nav>
        
   
    
    </Navbar>
  );
};
