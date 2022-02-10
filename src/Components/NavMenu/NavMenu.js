import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";
import { Link } from "./NavMenuElements";

export const NavMenu = () => {
  return (
    <Navbar sticky="top">
          <Nav className="me-auto">
            <Link href="#home">HOME</Link>
            <Link href="#home">SERVICES</Link>
            <Link href="#features">BLOG</Link>
            <Link href="#pricing">ABOUT</Link>
            <Link href="#pricing">CONTACT</Link>
          </Nav>
          <Login/>
          <SignUp/>
   
    
    </Navbar>
  );
};
