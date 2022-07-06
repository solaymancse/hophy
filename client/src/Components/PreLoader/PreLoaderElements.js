import styled, { keyframes  } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const rotate = keyframes`
   
   0% { 
      -webkit-transform: rotate(0deg) scale(0.8); 
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% { 
      -webkit-transform: rotate(360deg) scale(1.2); 
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% { 
      -webkit-transform: rotate(720deg) scale(0.8); 
      -moz-transform: rotate(720deg) scale(0.8);
    }
  
`;
export const ball1 = keyframes`
   
   0% {
      box-shadow: 30px 0 0 #f8b334;
    }
    50% {
      box-shadow: 0 0 0 #f8b334;
      margin-bottom: 0;
      -webkit-transform: translate(15px,15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #f8b334;
      margin-bottom: 10px;
    }
  
`;
export const ball2 = keyframes`
  0% {
      box-shadow: 30px 0 0 #97bf0d;
    }
    50% {
      box-shadow: 0 0 0 #97bf0d;
      margin-top: -20px;
      -webkit-transform: translate(15px,15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #97bf0d;
      margin-top: 0;
    }
  
`;
export const Loader = styled.div`
  position: absolute;
  animation-name: ${rotate} 1s infinite;
  height: 50px;
  width: 50px;

  &::before{
    animation-name: ${ball1} 1s infinite;  
    background-color: #cb2025;
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;  
    width: 20px;
  }
  &::after{
    animation-name: ${ball2} 1s infinite; 
    background-color: #00a096;
    box-shadow: 30px 0 0 #97bf0d;
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;  
    width: 20px;
  }
`;

