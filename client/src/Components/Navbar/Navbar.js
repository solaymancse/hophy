import React from "react";

import { Contact } from "./Contact/Contact";
import { NavMenu } from "./NavMenu/NavMenu";
import { TopBar } from "./TopBar/TopBar";

import { Div } from "./NavbarElements";
import { Container } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <Div>
      <Contact />
      <Container>
      <TopBar />
      <NavMenu />
      </Container>
      
    </Div>
  );
};
