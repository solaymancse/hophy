import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  flex: 1;
  padding-left: 40px;
  min-height: 100vh;
  background-color: #01d8da;
`;
export const Logo = styled.div`
  display: flex;
 margin-left: 10px;
  align-items: center;
  margin-top: 20px;
`;
export const Img = styled.img`
  width: 180px;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: start;
`;
export const Icon = styled.div`

`;
export const Title = styled.div``;
export const Div = styled.div`
  width: 100%;
  color: #fff;
 
`;

export const Links = styled(NavLink)`
  padding: 12px 0 12px 10px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  gap: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
 
  &:hover {
    transition: .5s;
    color: #fff;
   
  }
  &.active{
    background-color: #fff;
    color: #333;
    
  }
  
 
`;
export const DashLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  display: flex;
  padding: 12px 0;
  &:hover {
    color: #333;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  margin-bottom: 20px;
  padding-left: 10px;
  color: #fff;
  gap: 20px;
`;
export const H3 = styled.div`
  color: #f0f8ff;
  font-size: 20px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(1){
    position: relative;
    top: 20px;
    height: 20px;
    width: 100%;
    background-color: #fff;
  }
 
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
