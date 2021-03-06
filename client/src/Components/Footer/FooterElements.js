import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall, MdLocationOn } from "react-icons/md";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  color: #707070;
  margin-top: 50px;
  padding: 125px 0px;
  background: #333;
  width: 100%;

  @media (min-width: 1441px) and (max-width: 1536px) {
    padding: 50px 0px;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    padding: 50px 0px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 40px 0px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    padding: 30px 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px 0px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 20px 0px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;
    padding: 20px 0px;
  }
`;
export const FooterLogo = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  width: 200px;
  height: 50px;
`;

export const Img = styled.img`
  height: 40px;
  width: 160px;
`;
export const List = styled(NavLink)`
  text-decoration: none;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 12px;
  padding-top: 5px;
  transition: all 0.3s;
  align-items: center;
  color: #d5dadf;

  &:hover {
    color: #34ace3;
  }
`;

export const Contact = styled.div`
  color: ${(props) => props.color};
`;
export const Map = styled(MdLocationOn)`
  color: ${(props) => props.color};
  font-size: 30px;
  margin-right: 15px;
`;
export const Mail = styled(AiOutlineMail)`
  color: ${(props) => props.color};
  font-size: 25px;
  margin-right: 15px;
`;
export const Call = styled(MdCall)`
  color: ${(props) => props.color};
  font-size: 25px;
  margin-right: 15px;
`;
export const H4 = styled.h4`
  font-size: 11px;
  font-weight: bold;
  margin: 15px 0 70px;
  text-transform: uppercase;
  color: #929aa3;


  @media screen and (max-width: 575px) {
    margin: 50px 0 20px;
  }
`;

export const WidgetNews = styled.div`
  border-bottom: 1px solid #e1e1e1;
  margin-top: -7px;
  padding-bottom: 41px;
`;

export const WidgetSocial = styled.div`
  margin-bottom: 0;
  margin-left: -1px;
  margin-top: 14px;
`;
export const InputDiv = styled.div`
  display: flex;
  padding-left: 20px;
`;
export const NewsForm = styled.div`
  background-color: #f8f8f8;
  box-shadow: none;
  margin: 0;
  padding: 0;
`;
export const P = styled.p`
  letter-spacing: 0;
  line-height: 26px;
  margin-bottom: 24px;
`;

export const H1 = styled.h1`
  font-size: 14px;
  color: #d5dadf;
  font-weight: normal;

  &:hover {
    color: #34ace3;
    transition: 0.5s;
  }
`;
export const Links = styled.a`
  text-decoration: none;
  color: #929aa3;
  padding-left: 20px;
 

  &:hover {
    color: #34ace3;
    transition: 0.2s;
  }
`;