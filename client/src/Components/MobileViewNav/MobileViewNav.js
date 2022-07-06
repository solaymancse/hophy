import React from "react";

import { OffCanvas } from "../OffCanvas/OffCanvas";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Call, Mail} from "./../Footer/FooterElements";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ContactDiv,Contact,List } from "./MobileViewNavElement";
import { H1, H3, Icon } from "../Navbar/TopBar/TopBarElements";



export const MobileViewNav = () => {
  return (
    <div>
      <OffCanvas />
      <SocialLinks />
      <ContactDiv>
        <Contact>
          <List color="#333">
            <Icon
              color="#34ace3"
              style={{ marginRight: "20px", marginTop: "-5px" }}
            >
              <AiOutlineClockCircle />
            </Icon>
            <div>
              <H3 color="#333" style={{ fontSize: "12px" }}>
                WORKING HOURS
              </H3>
              <H1 color="red">SAT - FRI : 9.00AM - 10.00PM</H1>
            </div>
          </List>
          <List color="#333">
            <Mail color="#34ace3" />
            hophycare@gmail.com
          </List>
          <List color="#333" style={{ marginTop: "5px" }}>
            <Call color="#34ace3" />
            +0123-45-67-890
          </List>
        </Contact>
      </ContactDiv>
    </div>
  );
};
