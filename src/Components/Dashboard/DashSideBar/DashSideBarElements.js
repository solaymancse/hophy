import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  flex: 1;
  padding: 10px 30px;
  min-height: 100vh;
  background-color: #34ace3;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  width: 80%;
  height: 50px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: start;
  padding: 20px;

`;
export const Icon = styled.div`
  display: flex;
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
`;
export const Title = styled.div``;
export const Div = styled.div`
 


`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  display: flex;
  padding: 12px 0;
  &:hover{
    color: #333;
  }

 

`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  margin-bottom: 20px;
`;
export const H3 = styled.div`
  color: #f0f8ff;
  font-size: 20px;
`;


export const Center = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
