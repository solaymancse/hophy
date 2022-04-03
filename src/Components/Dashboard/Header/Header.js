import { Badge } from "@material-ui/core";
import React from "react";

import img from '../../../images/doc1.jpg'
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { BsChatLeft } from "react-icons/bs";
import { Navbar, NavWrap, Button, Left,Right, Input,Img,Icon } from "./HeaderElements";

export const Header = () => {
  return (
    <Navbar>
      <NavWrap>
        <Button className=" d-lg-none" />
        <Left>
          <Input type="search" placeholder="Type to Search" />
          <Icon><AiOutlineSearch /></Icon>
        </Left>
        <Right>
          <Badge color="secondary" badgeContent={0} showZero>
            <IoMdNotifications />
          </Badge>
          <Badge color="secondary" badgeContent={0} showZero>
            <BsChatLeft />
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
