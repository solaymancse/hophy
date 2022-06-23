import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
import { Login } from "../../Login/Login";

import { SignUp } from "../../SignUp/SignUp";
import { Links,Div,Item, Wrapper } from "./NavMenuElements";

import { AiOutlineSearch } from "react-icons/ai";
// Data Import
import { navMenuData } from "../../../Data";

export const NavMenu = () => {


  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Nav className="me-auto">
            {navMenuData.map((data, index) => (
              <Item key={index}>
                <Links to={data.link}>{data.title}</Links>
              </Item>
            ))}
          </Nav>
          <Div>
            <AiOutlineSearch />
            <Login />
            <SignUp />
          </Div>
        </Navbar>
      </Wrapper>
    </Container>
  );
};
