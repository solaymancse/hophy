import React from "react";

import { SiContentful, SiGoogletagmanager, SiProxmox, SiStyleshare } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import {  FaUserMd, FaUserNurse, FaUserTie } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { MdCall,MdMailOutline,MdWeb } from 'react-icons/md';

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

export const rightDivData = [
  {
    icon:<SiGoogletagmanager/>,
    title:'Managements',
    link:"management",
    color:"#ef629f "
  },
  {
    icon:<SiContentful/>,
    title:'Contents Team',
    link:"content-team",
    color:"#de6262 "
  },
  {
    icon:<SiStyleshare/>,
    title:'Marketing Dept',
    link:"marketing",
    color:"#06beb6 "
  }

];

export const engagedData = [
  {
    icon: <FaUserMd />,
    title:"34% Doctors"
  },
  {
    icon: <FaUserTie />,
    title:"36% Patients"
  },
  {
    icon:<FaUserNurse />,
    title:"34% Nurses"
  },
];

export const contactInfoData = [
  {
    icon: <MdCall />,
    title:"Phone",
    value:"+8801516710608",
    
  },
  {
    icon: <MdMailOutline />,
    title:"Email",
    value:"anikkbarua@gmail.com",

  },
  {
    icon:  <MdWeb />,
    title:"Site",
    value:"anikkbarua@gmail.com",

  }

];


