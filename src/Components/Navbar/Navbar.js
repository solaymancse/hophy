import React from "react";
import { Contact } from "../Contact/Contact";
import { Container } from "../Container/ContainerElements";
import { NavMenu } from "../NavMenu/NavMenu";
import { TopBar } from "../TopBar/TopBar";

import { Div } from "./NavbarElements";

export const Navbar = () => {
  return (
    <Div>
      <Container>
      <Contact />
      </Container>
      <hr style={{color:'grey'}}/> 
      <TopBar/>
     <Container>
     
    <NavMenu/>
     </Container>
      
        
  
    </Div>
  );
};
