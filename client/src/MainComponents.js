import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeSection } from "./pages/HomeSection";
import { AboutSection } from "./pages/AboutSection";
import { ServicesSection } from "./pages/ServicesSection";
import { BlogSection } from "./pages/BlogSection";
import { ContactSection } from "./pages/ContactSection";
// import { MobileLogin } from "./Components/MobileLogin/MobileLogin";
import { TermsAndCondition } from "./Components/TermsAndCondition/TermsAndCondition";
import { PrivacyPolicy } from "./Components/PrivacyPolicy/PrivacyPolicy";
import { MissionAndVission } from "./Components/MissionAndVission/MissionAndVission";
import { AdminLogin } from "./Components/AdminLogin/AdminLogin";
import { ErrorPage } from "./pages/ErrorPage";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { AdminDetails } from "./Components/Admin/AdminDetails/AdminDetails";
import { Management } from "./Components/Team/Management/Management";
import { ContentTeam } from "./Components/Team/ContentTeam/ContentTeam";
import { DashHome } from "./Components/Dashboard/DashHome/DashHome";
import { Patient } from "./Components/Patient/Patient";
import { Doctor } from "./Components/Doctor/Doctor";
import { Nurse } from "./Components/Nurse/Nurse";
import { Profile } from "./Components/Profile/Profile";
import { useSelector } from "react-redux";
import { CommonLoginPage } from "./Components/CommonLoginPage/CommonLoginPage";
import { ViewProfile } from "./Components/ViewProfile/ViewProfile";
import { AllBlog } from "./Components/AllBlog/AllBlog";
import { DiagonesticCenter } from "./Components/DiagonesticCenter/DiagonesticCenter";
import { Medicine } from "./Components/Medicine/Medicine";
import { ManagementLogin } from "./Components/Team/Management/ManagementLogin";
import { TeamLogin } from "./Components/Team/TeamLogin";
import { Appointments } from "./Components/Appointments/Appointments";
import { EventPage } from "./pages/EventPage";
import { Posts } from './Components/Dashboard/Posts/Posts';

export const MainComponents = () => {
  
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/hophy" element={<HomeSection />} />
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/terms&condition" element={<TermsAndCondition />} />
        <Route path="/privacy&policy" element={<PrivacyPolicy />} />
        <Route path="/mission&vission" element={<MissionAndVission />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/all-blog" element={<AllBlog />} />
        <Route path="/diagonestic" element={<DiagonesticCenter />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/Management/login" element={<ManagementLogin />} />
        <Route path="/team/login" element={<TeamLogin />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="*" element={<ErrorPage />} />

        {isLoggedIn && (
          <Route path="/dashboard/admin/*" element={<Dashboard />}>
            <Route index element={<DashHome />} />
            <Route path="adminDetails" element={<AdminDetails />} />
            <Route path="patients" element={<Patient />} />
            <Route path="doctors" element={<Doctor />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="nurses" element={<Nurse />} />
            <Route path="management" element={<Management />} />
            <Route path="content-team" element={<ContentTeam />} />
            <Route path="profile" element={<Profile />} />
            <Route path="posts" element={<Posts />} />
          </Route>
        )}

        <Route path="/patient/dashboard" element={<Dashboard />} />
        <Route path="/alllogin" element={<CommonLoginPage />} />
      </Routes>
    </>
  );
};
