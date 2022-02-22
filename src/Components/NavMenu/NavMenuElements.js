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

  &:hover{
    cursor: pointer;
    color: #fff;

    &:after{
      content: '';
      border-bottom: 1px solid #fff;
      transform: translateX(.2);
      width: 10px;
    }

  &:active{
    border-bottom: 1px solid #fff;
  }
  }

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

  @media (min-width: 768px) and (max-width: 991px){
    display: block;
    font-size: 22px;
    margin-top: -70px;
  };
  @media (min-width: 576px) and (max-width: 767px){
    display: block;
    font-size: 22px;
    margin-top: -40px;
    };
  @media screen and (max-width: 575px) {
    font-size: 24px;
    display: block;
    margin-top: -40px;
    margin-right: 40px;
    
  }
`;

export const Div = styled.div`
  display: flex;

  @media (min-width: 576px) and (max-width: 767px){
    display: none;

    };
  @media screen and (max-width: 575px) {
    display: none;
  };
`;
