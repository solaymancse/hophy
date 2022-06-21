import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const Navbar = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(31, 32, 34);
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const NavWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button``;
export const Img = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
`;
export const Left = styled.div`
  display: flex;
  width: 300px;
  height: 40px;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  &:hover {
    box-shadow: 10px;
  }
`;
export const Icon = styled.div`
  font-size: 18px;
  flex: 1;
`;

export const Input = styled.input`
  border: none;
  background-color: #ebebeb;
  background: transparent;
  border-radius: 20px;
  height: 100%;

  width: 100%;
  flex: 6;
  outline: none;

  &:hover {
    cursor: text;
  }
`;
export const Right = styled.div`
  position: fixed;
  top: 20px;
  right: 50px;
  z-index: 1;
  transition: 0.5s;
`;
export const Action = styled.div`
  top: 10px;
  right: 50px;
  transition: 0.5s;
`;
export const Menu = styled.div`
  position: absolute;
  top: 50px;
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
