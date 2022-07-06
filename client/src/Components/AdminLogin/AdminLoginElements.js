import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
export const Login = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 400px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;
export const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #34ace3;
  padding: 50px;
  justify-content: center;
  align-items: center;

  
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 150px;   
  }
`;

export const Img = styled.img`
  height: 50px;
  text-align: center;
  align-items: center;
 
  
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    flex-direction: column;
    height: 30px;
    margin: auto;
    
  }
`;
export const Right = styled.div`
background-color: #fff;
  width: 50%;
  height: 100%;
  padding: 50px;
  text-align: center;

  h1{
      margin-bottom: 20px;
  }
  p{
    color: #7e7e7e;
      margin-bottom: 50px;
  }
   @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  
    
  }
`;


export const Button = styled.button`
  width: 100%;
  background-color: #34ace3;
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;

  &:hover{
    background-color: #78E4CC;
  }
`;
export const Div = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 0.5px solid #6c757d;
  margin-bottom: 35px;

  input {
    border: none;
    outline: none;
  }
`;
