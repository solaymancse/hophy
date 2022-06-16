import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import "./Sticky.css";
import { Login } from './../Login/Login';
import { SignUp } from './../SignUp/SignUp';
import { Links } from './StickyNavbarElements';

export const StickyNavbar = () => {
  const [show, setShow] = useState(false);
  const controllNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_white d-none d-lg-block"}`}>
 
        <Container >
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-wrap align-items-center justify-content-between ">
              <nav>
                <Links to="/">Home</Links>
                <Links to="/services">Services</Links>
                <Links to="/about">About</Links>
                <Links to="/blog">Blog</Links>
                <Links to="/contact">Contact</Links>
              </nav>
              <div className="d-flex flex-wrap align-items-center">
                <Login/>
                <SignUp />
              </div>
            </div>
          </div>
        </div>
        </Container>
     
    </div>
  );
};
