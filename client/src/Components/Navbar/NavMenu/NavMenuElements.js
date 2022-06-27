import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: #fff;

  @media (max-width: 991px) {
    display: none;
  }
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

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 3px;
    background-color: #34ace3;
    transition: 0.3s;
  }
  &:hover {
    color: #34ace3;
  }
  &:hover:after {
    width: 100%;
  }

  &.active {
    color: #34ace3;
    padding-bottom: 20px;
    border-bottom: 3px solid #34ace3;
  }
  @media screen and (max-width: 991px) {
    display: none;
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
export const Button = styled.button`
  color: gray;
  font-size: 25px;
  border: none;
  background-color: #fff;
  transition: 0.5s all ease-in-out;
`;
export const InputBox = styled.div`
z-index: 1;
  display: flex;
  padding: 10px 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid transparent;
  transition: all 0.5s ease-in-out;
  opacity: 1;
  position: absolute;
  top: -200px;
  left: -10%;
  transform: translate(-17%);
  left: 0;
  width: 100vw;
  align-content: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
  opacity: 0.8;

  input {
    padding: 10px;
    outline: none;
    border: none;
   
    
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 11px;
    background-color: #34ace1;
    font-weight: bold;
    font-size: 12px;
  }
`;
export const InputBody = styled.div`
  display: flex;
  align-items: center;
  z-index: 9;
  

  
`;
