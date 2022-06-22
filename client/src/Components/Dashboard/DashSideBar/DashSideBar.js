import React from "react";
import { AiFillSetting } from "react-icons/ai";
import {  FaUsers } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { MdAccountBalance, MdOutlineExitToApp } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import { SidebarData, dashSideData } from "../../../Data";
import logo from "../../../images/brand5.png";
import {
  Wrapper,
  Img,
  Links,
  List,
  Bottom,
  Logo,
  Center,
  H3,
  Icon,
  Label,
  Title,
  Div,
  DashLink
} from "./DashSideBarElements.js";
export const DashSideBar = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/dashboard">
          <Img src={logo} alt="logo" />
        </Link>
      </Logo>

      <List>
        <Label>
          <Icon>
            <RiDashboardFill />
          </Icon>
          <DashLink to="/dashboard/admin" >Dashboard</DashLink>
        </Label>
        <Center>
          <div>
          <Label>
            <Icon>
              <FaUsers />
            </Icon>
            <H3>Users</H3>
          </Label>
         
          {SidebarData.map((item,index) => (
            <Div key={index}>
              <Links to={item.path}>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
              </Links>
            </Div>
          ))}
          </div>
          <div>
            <Label>
              <Icon>
                <GiTeamIdea />
              </Icon>
              <H3>Team</H3>
            </Label>
              {dashSideData.map((sidedata, index) => (
                <Div key={index}>
                <Links to={sidedata.path}>
                  <Icon>{sidedata.icon}</Icon>
                  {sidedata.title}
                </Links>
                </Div>
              ))} 
          </div>
        </Center>
      </List>

      <Bottom>
        <Label>
          <Icon>
            <MdAccountBalance />
          </Icon>
          <H3>Account</H3>
        </Label>
        <Links exact to="/setting">
          <Icon>
            <AiFillSetting />
          </Icon>
          Setting
        </Links>
        <Links exact to="/logout">
          <Icon>
            <MdOutlineExitToApp />
          </Icon>
          Log out
        </Links>
      </Bottom>
    </Wrapper>
  );
};
