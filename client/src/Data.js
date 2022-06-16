import React from "react";

import { SiContentful, SiGoogletagmanager, SiProxmox } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import {  FaUserMd, FaUserNurse, FaUserTie } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Specialities",
    path:"specialities",
    icon: <SiProxmox />,
  },
  {
    title: "Appointments",
    path:"appointments",
    icon: <RiAppsFill />,
  },
  {
    title: "Doctors",
    path:"doctors",
    icon: <FaUserMd />,
  },
  {
    title: "Patients",
    path:"patients",
    icon: <FaUserTie />,
  },
  {
    title: "Nurses",
    path:"nurses",
    icon: <FaUserNurse />,
  },
];

export const dashSideData = [
  {
    title: "Admin",
    path:"adminDetails",
    icon: <BsPersonPlusFill/>
  },
  {
    title: "Management",
    path:"management",
    icon: <SiGoogletagmanager/>
  },
  {
    title: "Content Team",
    path:"content-team",
    icon: <SiContentful/>
  }
];

export const navMenuData = [
  {
    link:"/",
    title:"HOME"
  },
  {
    link:"/services",
    title:"SERVICES"
  },
  {
    link:"/blog",
    title:"BLOG"
  },
  {
    link:"/about",
    title:"ABOUT"
  },
  {
    link:"/contact",
    title:"CONTACT"
  }

];


