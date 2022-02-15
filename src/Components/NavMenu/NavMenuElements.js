import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  padding-right: 30px;
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  font-size: 14px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Tooglebar = styled.div`
  @media screen and (max-width: 575px) {
   
    
  };
`;

export const Bars = styled(GoThreeBars)`
  font-size: 30px;
  color: #fff;
  display: none;

  @media screen and (max-width: 575px) {
    font-size: 24px;
    display: block;
    margin-top: -40px;
    margin-right: 40px;
    
  }
`;

export const Div = styled.div`
  display: flex;

  @media screen and (max-width: 575px) {
    display: none;
  };
`;
