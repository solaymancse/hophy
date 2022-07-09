import React from "react";

import { Wrapper, Container } from "./DashboardElements";
import { DashSideBar } from "./DashSideBar/DashSideBar";
import { Header } from "./Header/Header";

import { Routes, Route } from "react-router-dom";
import { DashHome } from "./DashHome/DashHome";
import { AdminDetails } from "./../Admin/AdminDetails/AdminDetails";

import { ContentTeam } from "./../Team/ContentTeam/ContentTeam";
import { Management } from "../Team/Management/Management";
import { Patient } from './../Patient/Patient';
import { Doctor } from './../Doctor/Doctor';
import { Nurse } from './../Nurse/Nurse';
import { Profile } from './../Profile/Profile';
import { Appointments } from './../Appointments/Appointments';

export const Dashboard = () => {
  return (
    <Wrapper>
      <DashSideBar />
      <Container>
        <Header />
        <Routes>
          <Route index element={<DashHome />}/>
            <Route path="adminDetails" element={<AdminDetails />} />
            <Route path="management" element={<Management />} />
            <Route path="content-team" element={<ContentTeam />} />
            <Route path="patients" element={<Patient/>}/>
          <Route path="doctors" element={<Doctor/>}/>
          <Route path="appointments" element={<Appointments/>}/>
          <Route path="nurses" element={<Nurse/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </Container>
    </Wrapper>
  );
};
