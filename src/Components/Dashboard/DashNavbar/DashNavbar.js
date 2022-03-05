import { Badge } from "@material-ui/core";
import React from "react";

import img from '../../../images/doc1.jpg'
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Navbar, NavWrap, Button, Left,Right, Input,Img } from "./DashNavbarElements";

export const DashNavbar = () => {
  return (
    <Navbar>
      <NavWrap>
        <Button className=" d-lg-none" />
        <Left>
          <Input type="text" placeholder="Type to Search" />
          <AiOutlineSearch />
        </Left>
        <Right>
          <Badge color="secondary" badgeContent={0} showZero>
            <IoMdNotifications />
          </Badge>
          <div>
              <Img src={img} alt=""/>
              <RiArrowDropDownLine/>
          </div>
        </Right>
      </NavWrap>
    </Navbar>
  );
};
