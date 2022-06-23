import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";


export const Navbar = styled.div`
 background-color:#fff;

`;
export const Item = styled.div`
 margin-right: 20px;
 position: relative;
 padding-bottom: 8px;

`;
export const Links = styled(NavLink)`
  text-decoration: none;
  color: #7e7e7e;
  padding-right: 20px;
  font-family: "Sarabun", sans-serif;
  font-weight: normal;
  font-size: 14px;
  
  

  &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 3px;
    background-color: #333;
    transition: 0.3s;
  }
  &:hover{
    color: #333;
  }
  &:hover:after { 
    width: 100%;
  }

  &.active{
    color: #34ace3;
    padding-bottom: 20px;
    border-bottom: 3px solid #34ace3;
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
  align-items: center;
  margin-right: -20px;
  gap: 10px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
