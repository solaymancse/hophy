import React from "react";

import { MdLocationOn } from "react-icons/md";

import { Wrapper, Div, P, Navbar, Items, Links } from "./OffCanvasElements";

export const OffCanvas = () => {
  return (
    <Wrapper>
      <Div>
        <MdLocationOn />
        <P>Chattogram Software Technology Park, 4100, Chittagong</P>
      </Div>
      <Navbar>
        <Links to="/">Home</Links>
        <Links to="/about">About</Links>
        <Links to="/services">Services</Links>
        <Items>
          <Links to="/services">All Service Details</Links>
          <Links to="/t&c">Terms and Condition</Links>
        </Items>
        <Links to="/all-blog">Blog</Links>
        <Links to="/login">Login</Links>
        <Links to="/signup">Sign up</Links>
        <Links to="/contact">Contact</Links>
      </Navbar>
    </Wrapper>
  );
};
