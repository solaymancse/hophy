import React from "react";

import {
  SiContentful,
  SiGoogletagmanager,
  SiProxmox,
  SiStyleshare,
} from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";
import { FaUserMd, FaUserNurse, FaUserTie } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { MdCall, MdMailOutline, MdWeb, MdLocationOn } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineClockCircle,
} from "react-icons/ai";
import hero1 from "./images/hero3.jpg";
import hero2 from "./images/hero2.jpg";
import img1 from "./images/blog1.jpg";
import img2 from "./images/blog2.jpg";
import img3 from "./images/blog3.jpg";
import vlog1 from "./images/vlog1.jpg";
import vlog2 from "./images/vlog2.jpg";
import vlog3 from "./images/vlog3.jpg";
import doc1 from "./images/doctor1.png";
import doc2 from "./images/doctor2.png";
import doc3 from "./images/doctor3.png";
import doc4 from "./images/doctor4.png";

export const SidebarData = [
  {
    title: "Specialities",
    path: "specialities",
    icon: <SiProxmox />,
  },
  {
    title: "Appointments",
    path: "appointments",
    icon: <RiAppsFill />,
  },
  {
    title: "Doctors",
    path: "doctors",
    icon: <FaUserMd />,
  },
  {
    title: "Patients",
    path: "patients",
    icon: <FaUserTie />,
  },
  {
    title: "Nurses",
    path: "nurses",
    icon: <FaUserNurse />,
  },
];

export const dashSideData = [
  {
    title: "Post",
    path: "posts",
    icon: <BsPersonPlusFill />,
  },
  {
    title: "Admin",
    path: "adminDetails",
    icon: <BsPersonPlusFill />,
  },
  {
    title: "Management",
    path: "management",
    icon: <SiGoogletagmanager />,
  },
  {
    title: "Content Team",
    path: "content-team",
    icon: <SiContentful />,
  },
];

export const navMenuData = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/all-blog",
    title: "BLog",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/diagonestic",
    title: "Diagonestic",
  },
  {
    link: "/medicine",
    title: "Medicine",
  },
  {
    link: "/contact",
    title: "Contact",
  },
  {
    link: "/event",
    title: "Events",
  },
];

export const rightDivData = [
  {
    icon: <SiGoogletagmanager />,
    title: "Managements",
    link: "management",
    color: "#ef629f ",
  },
  {
    icon: <SiContentful />,
    title: "Contents Team",
    link: "content-team",
    color: "#de6262 ",
  },
  {
    icon: <SiStyleshare />,
    title: "Marketing Dept",
    link: "marketing",
    color: "#06beb6 ",
  },
];

export const engagedData = [
  {
    icon: <FaUserMd />,
    title: "34% Doctors",
  },
  {
    icon: <FaUserTie />,
    title: "36% Patients",
  },
  {
    icon: <FaUserNurse />,
    title: "34% Nurses",
  },
];

export const contactInfoData = [
  {
    icon: <MdCall />,
    title: "Phone",
    value: "+8801516710608",
  },
  {
    icon: <MdMailOutline />,
    title: "Email",
    value: "anikkbarua@gmail.com",
  },
  {
    icon: <MdWeb />,
    title: "Site",
    value: "anikkbarua@gmail.com",
  },
];

export const footerData = [
  {
    icon: <MdLocationOn />,
    title: "Chattogram Software Technology Park, 4100, Chittagong",
    link: "/",
  },
  {
    icon: <AiOutlineMail />,
    title: "hophystartup@gmail.com",
    link: "/",
  },
  {
    icon: <MdCall />,
    title: "+880193-40-61-718",
    link: "/",
  },
];
export const footerPostData = [
  {
    title: "Cancer Care",
    link: "/",
  },
  {
    title: "Heart Care",
    link: "/",
  },
  {
    title: "Orthopedic Care",
    link: "/",
  },
  {
    title: "Women's Health",
    link: "/",
  },
  {
    title: "Emergency Services",
    link: "/",
  },
  {
    title: "Urgent Care",
    link: "/",
  },
];
export const footerLinkData = [
  {
    title: "Terms and Condition",
    link: "/terms&condition",
  },
  {
    title: "Privacy Policy",
    link: "/privacy&policy",
  },
  {
    title: "Refund Policy",
    link: "/",
  },
  {
    title: "Security",
    link: "/",
  },
  {
    title: "Mission & Vission",
    link: "/mission&vission",
  },
  {
    title: "Contact Us",
    link: "/",
  },
];

export const topColumnData = [
  {
    icon: "193-40-61-718",
    title: "EMERGENCY SERVICE",
    desc: "Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est, ac",
    link: "/",
    linkTitle: "Read More",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "DO YOU WANT TO MAKE AN APPOINTMENT",
    desc: "Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum.",
    link: "/",
    linkTitle: "Appoiment",
  },
  {
    icon: <AiOutlineClockCircle />,
    title: "OPENING HOURS",
    desc: "Monday – Friday",
    desc2: "Saturtay – Sunday",
    link: "/",
    linkTitle: "Contact US",
  },
];

export const heroData = [
  {
    img: `{${hero1}}`,
    title: " Your Heath Is",
    span: "",
  },
  {
    img: `{${hero2}}`,
  },
];
export const docDegree = [
  {
    title: "Breast Surgery",
  },
  { title: "Colorectal Surgery" },
  { title: "Endocrinology" },
  { title: "Cardiology" },
  { title: "Cosmetic Dermatology" },
  { title: "Mole checks and monitoring" },
  { title: "Clinical Neurophysiology" },
];
export const blogData = [
  {
    img: `${img1}`,
    date: "February 11, 2022",
    title: "Hand Washing: Why its really Important",
  },
  {
    img: `${img2}`,
    date: "February 11, 2022",
    title: "Hand Washing: Why its really Important",
  },
  {
    img: `${img3}`,
    date: "February 11, 2022",
    title: "Hand Washing: Why its really Important",
  },
];

export const vlogData = [
  {
    img: `${vlog1}`,
    title:"Problems About Social Insurance For Truck Driver"
  },
  {
    img: `${vlog2}`,
    title:"Problems About Social Insurance For Truck Driver"
  },
  {
    img: `${vlog3}`,
    title:"Problems About Social Insurance For Truck Driver"
  },
];
export const doctorData = [
  {
    img: `${doc1}`,
    title:"Dr. John",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc2}`,
    title:"Dr. Amelia",
    des:"Gynecologist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc3}`,
    title:"Dr. Jack",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc4}`,
    title:"Dr. Jessica",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc1}`,
    title:"Dr. John",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc2}`,
    title:"Dr. Amelia",
    des:"Gynecologist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc3}`,
    title:"Dr. Jack",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
  {
    img: `${doc4}`,
    title:"Dr. Jessica",
    des:"Dentist",
    degree:"795 Folsom Ave, Suite 600 San Francisco, CADGE 94107"
  },
];
