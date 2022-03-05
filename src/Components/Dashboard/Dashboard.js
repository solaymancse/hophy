import React from 'react'

import { Wrapper } from './DashboardElements';
import { DashSideBar } from './DashSideBar/DashSideBar';
import { MainContent } from './MainContent/MainContent';


export const Dashboard = () => {

  return (
    <Wrapper>
        <DashSideBar/>
        <MainContent/>

    </Wrapper>
  )
}
