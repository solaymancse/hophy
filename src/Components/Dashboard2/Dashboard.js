import React from 'react'

import { Wrapper } from './DashboardElements';

import { MainContent } from './MainContent/MainContent';
import { Routes,Route } from 'react-router-dom';
import { DashSideBar } from './DashSideBar/DashSideBar';
import { ManagementForm } from '../ManagementForm/ManagementForm';




export const Dashboard = () => {

  return (
    <Wrapper>
      <DashSideBar/>
      <Routes>
        <Route path='/add' element={ <MainContent /> }/>
      </Routes>

    </Wrapper>
  )
}
