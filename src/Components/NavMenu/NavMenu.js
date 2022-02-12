import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/SignUp";
import { NavLink } from 'react-router-dom';



export const NavMenu = () => {
  return (
    
      <Navbar>
          <Nav className="me-auto">
            <NavLink exact to="/">HOME</NavLink>
            <NavLink exact to="/services">SERVICES</NavLink>
            <NavLink exact to="/blog">BLOG</NavLink>
            <NavLink exact to="/about">ABOUT</NavLink>
            <NavLink exact to="/contact">CONTACT</NavLink>
          </Nav>
          <Login/>
          <SignUp/>
    </Navbar>
   
    
  );
};
