import React from 'react'

import { Wrapper,Img } from './DashSidebarElements';
import logo from '../../../images/brand5.png'



export const DashSideBar = () => {
  return (
    <Wrapper>
        <div>
            <Img src={logo} alt="logo"/>
        </div>
        <div>
            <ul>
                <li>Add Management Team</li>
                <li>Add Content Team</li>
               
            </ul>
        </div>

    </Wrapper>
  )
}
