import React from 'react'

import { Wrapper,Img,Links,List,Div } from './DashSidebarElements';
import logo from '../../../images/brand5.png'



export const DashSideBar = () => {
  return (
    <Wrapper>
        <div>
            <Img src={logo} alt="logo"/>
        </div>
        <Div>
            <List>
                <Links exact to="/add_management_team">Add Management Team</Links>
                <Links exact to="/add_content_team">Add Content Team</Links>
               
            </List>
        </Div>

    </Wrapper>
  )
}
