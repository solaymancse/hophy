import React from 'react'
import { AiFillSetting } from 'react-icons/ai';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { MdAccountBalance, MdOutlineExitToApp } from 'react-icons/md';
import { RiDashboardFill } from 'react-icons/ri';
import { SiContentful, SiGoogletagmanager } from 'react-icons/si';
import { Link } from 'react-router-dom';

import {SidebarData} from '../../../Data'
import logo from "../../../images/brand5.png"
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
    Div
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
          <H3>Dashboard</H3>
        </Label>
        <Center>
          <Label>
            <Icon>
              <FaUsers />
            </Icon>
            <H3>Users</H3>
          </Label>
          {SidebarData.map((item) => (
            <Div>
              <Links to={item.path}>
               <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              </Links>
            </Div>
          ))}
          <div>
            <Label>
              <Icon>
                <GiTeamIdea />
              </Icon>
              <H3>Team</H3>
            </Label>
            <div>
              <Links  to="/management">
               <Icon><SiGoogletagmanager/> </Icon>
                Management
              </Links>
              <Links  to="/content">
               <Icon><SiContentful/></Icon>
                Content
              </Links>
            </div>
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
        <Links exact to="/">
        <Icon> <FaUserAlt/> </Icon>
          Profile
        </Links>
        <Links exact to="/">
         <Icon> <AiFillSetting /></Icon>
          Setting
        </Links>
        <Links exact to="/">
          <Icon><MdOutlineExitToApp /></Icon>
          Log out
        </Links>
      </Bottom>
    </Wrapper>
  )
}
