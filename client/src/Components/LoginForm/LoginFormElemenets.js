import styled from "styled-components";
import { FaUserTie } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #34ace3;
  flex: 1;
  margin: -16px 0 -16px -16px;
`;
export const Right = styled.div`
  padding: 50px;
  flex: 1;
  position: relative;
  
  margin: -16px -16px -16px 0;

  a{
    text-decoration: none;
    text-align: center;
    
  }
`;
export const Img = styled.img`
  width: 150px;
  height: 40px;
`;
export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  outline: none;
`;

export const InputBox = styled.div`
 display: flex;
 align-items: center;
 border-bottom: 1px solid lightgrey;
 padding: 15px;
 margin-bottom: 10px;
 gap: 10px;

`;
export const H1 = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Oswald", sans-serif;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #34ace3;
  border: none;
  margin-top: 30px;
  margin-bottom: 20px;

  &:hover {
    background-color: #388C7E;
  }
`;
export const Div = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
 
`;
export const Icon = styled.div`
margin-bottom: 30px;
  
`;
export const Profile = styled(FaUserTie)`
  font-size: 35px;
`;
export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  color: #fff;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
`;
