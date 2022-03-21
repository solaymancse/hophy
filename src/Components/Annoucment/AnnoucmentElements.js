import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
  font-family: "Oswald", sans-serif;

  &:before {
    content: "Notice";
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    position: absolute;

    width: 100px;
    height: 40px;
    background-color: red;
    top: 10px;
    right: 10px;
  }
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
