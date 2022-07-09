import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";

export const Navbar = styled.div`
  background-color: #01d8da;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  z-index: 1;
`;
export const Button = styled.button``;
export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const Left = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  align-items: center;
  border: 0.5px solid #fff;
  cursor: pointer;
  padding: 20px;
  border-radius: 20px;

  &:hover {
    box-shadow: 10px;
    background-color: #ebebeb;
    transition: 0.5s ease-in-out;
    color: #333;
  }
`;
export const Icon = styled.div`
  font-size: 18px;
  flex: 1;
  color: #fff;
`;

export const Input = styled.input`
  border: none;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
  flex: 6;
  outline: none;

  &:hover {
    cursor: text;
  }
`;
export const Right = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: 0.5s;
  justify-content: space-between;
`;
export const Notification = styled.div`
  display: flex;
  gap: 20px;
`;
export const NotiBadge = styled(Badge)`
  color: #fff;
`;
export const Action = styled.div`
  top: 10px;
  right: 50px;
  transition: 0.5s;
`;
export const Menu = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  margin-top: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  transition: 0.5s ease-in;
`;
export const List = styled(NavLink)`
  text-decoration: none;
  color: gray;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s;
  &:hover {
    color: #34ace3;
  }
`;
export const H3 = styled.h3`
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 20px;
  transition: 0.5s;
`;
export const Span = styled.span`
  font-size: 14px;
  color: gray;
`;
export const Div = styled.div`
border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: transparent;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  text-align: center;
  align-items: center;
  
`;
