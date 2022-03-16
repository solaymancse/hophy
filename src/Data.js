import React from "react";

import { SiProxmox } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import {  FaUserMd, FaUserNurse, FaUserTie } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Specialities",
    path:"/specialities",
    icon: <SiProxmox />,
  },
  {
    title: "Appointments",
    path:"/appointments",
    icon: <RiAppsFill />,
  },
  {
    title: "Doctors",
    path:"/dcotors",
    icon: <FaUserMd />,
  },
  {
    title: "Patients",
    path:"/patients",
    icon: <FaUserTie />,
  },
  {
    title: "Nurses",
    path:"/nurses",
    icon: <FaUserNurse />,
  },
];
