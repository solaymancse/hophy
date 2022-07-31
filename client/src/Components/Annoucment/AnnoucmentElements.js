import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 40%;
 
  background: red;
  width: 500px;
  height: 300px;
  z-index: 9999999;
`;
export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const Img = styled.img`
  width: 170px;
  height: 40px;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-family: "Oswald", sans-serif;
`;
export const Button = styled.button`
  background-color: ${props=>props.color};
  border: none;
  color: #fff;
  width: 300px;
  margin-bottom: 10px;
  padding: 5px;
  
`;
export const Input = styled.input`
    padding: 10px;
    width: 300px;
    outline: none;
    
`;
