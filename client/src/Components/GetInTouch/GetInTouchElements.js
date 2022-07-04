import styled from "styled-components";

import img from "../../images/background1.jpg";
import { FaQuoteRight } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
 

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    
  }
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    
  }
`;
export const Right = styled.div`
  flex: 1;
  padding: 0px 0 0 20px;
 

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 8px;
      border: 1px solid lightgray;
      outline: none;
    }
    textarea {
      outline: none;
      border-radius: 8px;
      height: 36vh;
      border: 1px solid lightgray;
      padding: 10px 0 0 10px;
    }
  }
  @media (max-width: 575px) {
    height: 100vh;
    padding: 0;
  }
`;
export const Div = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 

  img {
    position: relative;
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    border-radius: 50%;
  }
  p {
    position: relative;
    top: 50%;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    padding: 0 20%;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    height: 65vh;
    width: 100%;
    img{
        left: 15%;
        top: 10%;
    }
    p{
      top: 30%;
    }
    
  
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 60vh;
    width: 100%;
    img{
        left: 15%;
        top: 15%;
    }
    
  
  }
  @media (min-width: 320px) and (max-width: 480px) {
   height: 60vh;
   img{
       top: 20%;
       left: 10%;
   }
   
   
  }
  
`;
export const Quote = styled(FaQuoteRight)`
  position: relative;
  top: 45%;
  left: 10%;
 
  color: #fff;
  font-size: 40px;
  

  @media (min-width: 1200px) and (max-width: 1399px) {
   left:5%;
   
  }
  @media (min-width: 992px) and (max-width: 1199px) {
   left:-2%;
   
  }
  @media (min-width: 769px) and (max-width: 991px) {
   left:-25%;
   top:30%;
  }
  @media (min-width: 575px) and (max-width: 768px) {
   left: 30%;
  }
  @media (min-width: 481px) and (max-width: 575px) {
   left: 25%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
   left: 10%;
  }
`;
export const H1 = styled.h1`
  font-size: 24px;
  color: #363636;
  font-weight: bold;
  margin-bottom: 22px;
`;
export const Button = styled.button`
  border: none;
  background-color: #68dadb;
  margin-top: 25px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;

  &:hover {
    background-color: #34ace1;
  
    color: #333;
  }
`;
