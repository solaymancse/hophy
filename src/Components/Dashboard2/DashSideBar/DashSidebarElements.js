import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding:  10px 30px;
  height: 100vh;
  background-color: #34ace3;
 
`;
export const Img = styled.img`
  width: 100%;
  height: 50px;
`;
export const Links = styled(NavLink)`
  text-decoration:none;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;

  &:hover{
    background-color: #fff;
    padding: 10px 0 10px 10px ;
    color: #333;
    transition: 0.5s ;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column ;
`;
export const Div = styled.div`
  margin-top: 100px;
`;
