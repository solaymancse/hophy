import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";


export const Item = styled.div`
 margin-right: 20px;
 position: relative;

`;
export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding-right: 20px;
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  font-size: 14px;
  

  &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 3px;
    background-color: #fff;
    transition: 0.3s;
  }
  &:hover{
    color: #fff;
  }
  &:hover:after {
    
    width: 100%;


   
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Tooglebar = styled.div`
 margin-right: 20px;

`;

export const Bars = styled(GoThreeBars)`
  font-size: 22px;
  color: #fff;
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    margin-top: -40px;
  }
`;

export const Div = styled.div`
  display: flex;
  margin-right: -20px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
