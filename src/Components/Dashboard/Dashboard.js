import React from 'react'
import { DashNavbar } from './DashNavbar/DashNavbar';
import { Wrapper } from './DashboardElements';
import { DashSideBar } from './DashSideBar/DashSideBar';


export const Dashboard = () => {

  return (
    <Wrapper>
        <DashSideBar/>
        <DashNavbar/>
    </Wrapper>
  )
}
