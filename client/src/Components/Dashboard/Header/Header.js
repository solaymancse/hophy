import React,{ useState } from "react";

// import { Badge } from "@material-ui/core";

import img from "../../../images/profile1.png";
import { AiOutlineSearch } from "react-icons/ai";
// import { IoMdNotifications } from "react-icons/io";
// import { BsChatLeft } from "react-icons/bs";
import { FaUserTie } from 'react-icons/fa';
import { FiEdit ,FiMail,FiHelpCircle} from 'react-icons/fi';
import { AiFillSetting} from 'react-icons/ai';
import { BiExit} from 'react-icons/bi';
import {

  Navbar,
  NavWrap,
  Button,
  Left,
  Right,
  Input,
  Img,
  Icon,
  Action,
  Menu,
  List,
  H3,
  Span,
} from "./HeaderElements";

export const Header = () => {

  const [show, setShow ] = useState(false);

  const menuShow = () => {
    setShow(!show);
  }

  return (
    <Navbar>
      <NavWrap>
        <Button className=" d-lg-none" />
        <Left>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Input type="search" placeholder="Type to Search" />
        </Left>
        <Right>
          {/* <div>
            <Badge color="secondary" badgeContent={0} showZero>
              <IoMdNotifications />
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
              <BsChatLeft />
            </Badge>
          </div> */}
          <Action>
            <div onClick={menuShow}>
              <Img src={img} alt="" />
            </div>
           { show && (
              <Menu>
              <H3>
                Anik Barua
                <br />
                <Span>Team Lead</Span>
              </H3>
              <List to="profile"><FaUserTie/>My Profile</List>
              <List to="/"><FiEdit/>Edit Profile</List>
              <List to="/"><FiMail/>Inbox</List>
              <List to="/"><AiFillSetting/>Setting</List>
              <List to="/"><FiHelpCircle/>Help</List>
              <List to="/"><BiExit/>Log out</List>
            </Menu>
           )}
          </Action>
        </Right>
      </NavWrap>
    </Navbar>
  );
};
