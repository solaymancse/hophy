import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeSection } from "./pages/HomeSection";
import { AboutSection } from "./pages/AboutSection";
import { ServicesSection } from "./pages/ServicesSection";
import { BlogSection } from "./pages/BlogSection";
import { ContactSection } from "./pages/ContactSection";
// import { MobileLogin } from "./Components/MobileLogin/MobileLogin";
import { TermsAndCondition } from './Components/TermsAndCondition/TermsAndCondition';
import { PrivacyPolicy } from "./Components/PrivacyPolicy/PrivacyPolicy";
import { MissionAndVission } from "./Components/MissionAndVission/MissionAndVission";

export const MainComponents = () => {
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
        {/* <Route path="/login" element={<MobileLogin/>} /> */}

        
      </Routes>
    </>
  );
};
