import React from 'react'
import { Route, Routes } from 'react-router-dom'



import { DashNavbar } from './../DashNavbar/DashNavbar';
import { ManagementForm } from './../../ManagementForm/ManagementForm';




export const MainContent = () => {
 
  return (
    <div>
       <DashNavbar/>
      <Routes>
        <Route exact path="/add_management_team" element={ <ManagementForm/>}/>
      </Routes>
     
    </div>
  )
}
