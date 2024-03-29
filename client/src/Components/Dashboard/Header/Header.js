import React, { useState } from "react";

// import { Badge } from "@material-ui/core";

import img from "../../../images/profile1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { FiEdit, FiMail, FiHelpCircle } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import {Axios} from '../../../config'
import {
  Navbar,
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
  Notification,
  NotiBadge,
  Div,
} from "./HeaderElements";

import { IoMdNotifications } from "react-icons/io";
import { BsChatLeft } from "react-icons/bs";
import { authActions } from "./../../../Store/index";
import { useDispatch } from "react-redux";
import { swal } from "sweetalert";


export const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const menuShow = () => {
    setShow(!show);
  };

  const sendLogoutReq = async () => {
    const res = await Axios.get("adminlogout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res;
    }

    return new Error("Unable to Logout");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() =>
      dispatch(
        authActions.logout(),
        swal({
          title: "Logged Out",
          text: "You Successfully Logged Out",
          icon: "success",
          button: "Aww yiss!",
        })
      )
    );
  };

  return (
    <Navbar>
      <Button className="d-lg-none" />
      <Left>
        <Icon>
          <AiOutlineSearch />
        </Icon>
        <Input type="search" placeholder="Type to Search" />
      </Left>
      <Right>
        <Notification>
          <NotiBadge color="primary" badgeContent={4} showZero>
            <IoMdNotifications />
          </NotiBadge>
          <NotiBadge color="secondary" badgeContent={0} showZero>
            <BsChatLeft />
          </NotiBadge>
        </Notification>
        <Action>
          <Div onClick={menuShow}>
            <Img src={img} alt="" />
          </Div>
          {show && (
            <Menu>
              <H3>
                Anik Barua
                <br />
                <Span>Team Lead</Span>
              </H3>
              <List to="profile">
                <FaUserTie />
                My Profile
              </List>
              <List to="/">
                <FiEdit />
                Edit Profile
              </List>
              <List to="/">
                <FiMail />
                Inbox
              </List>
              <List to="/">
                <AiFillSetting />
                Setting
              </List>
              <List to="/">
                <FiHelpCircle />
                Help
              </List>
              <List to="/" onClick={handleLogout}>
                <BiExit />
                Log out
              </List>
            </Menu>
          )}
        </Action>
      </Right>
    </Navbar>
  );
};
