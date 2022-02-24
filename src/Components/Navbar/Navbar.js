import React from "react";
import { Contact } from "../Contact/Contact";
import { NavMenu } from "../NavMenu/NavMenu";
import { TopBar } from "../TopBar/TopBar";

import { Div } from "./NavbarElements";

export const Navbar = () => {
  return (
    <Div>
      <Contact />
      <TopBar />
      <NavMenu />
    </Div>
  );
};
