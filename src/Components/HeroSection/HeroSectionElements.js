import styled from "styled-components";
import img from '../../images/hero_1.jpg'
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 100%;
  height: 750px;
  background-position: center;
  background-size: cover;
  text-align: center;

  

 
  @media (min-width: 768px) and (max-width: 1280px){
    height: 580px;
    
    };
  @media (min-width: 481px) and (max-width: 767px){
    height: 360px;
   
   
    };
  @media (min-width: 320px) and (max-width: 480px){
    height: 360px;
   
   
    };
 

`;

export const Container = styled.div`
  margin: 0px 350px;
  position: relative;

  @media (min-width: 768px) and (max-width: 1024px){
        margin:auto;
    };
  @media (min-width: 576px) and (max-width: 767px){
  margin: auto;
   
   };
  @media screen and (max-width: 575px) {
    margin: auto;
  }
 
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 250px;
  height: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1281px) and (max-width: 1440px){
    top:150px;
    };
  @media (min-width: 768px) and (max-width: 1280px){
    top:150px;
    };
  @media (min-width: 576px) and (max-width: 767px){
   top:60px;
   
    };
  @media screen and (max-width: 575px) {
   top: 60px;
   height: 300px;
  }
`;
export const P = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  animation: fadeInLeft 1s ease-in-out;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) and (max-width: 1280px){
    font-size: 12px;
    };
  
  @media (min-width: 576px) and (max-width: 767px){
    font-size: 12px;
   
    };
  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 50px;
  }
`;
export const H1 = styled.div`
  font-size: 90px;
  font-weight: 900;
  color: #333;
  margin-top: 0;
  line-height: 1.1;

  @media (min-width: 768px) and (max-width: 1280px){
    font-size: 60px;
    margin-bottom: -30px;
    };
  @media (min-width: 576px) and (max-width: 767px){
    font-size: 40px;
    margin-bottom: -50px;
    };
  @media screen and (max-width: 575px) {
    font-size: 40px;
    margin-top: 20px;
  }
`;
export const Span = styled.div`
  font-size: 90px;
  color: #333;
  font-weight: 300;

  @media (min-width: 768px) and (max-width: 1280px){
    font-size: 60px;
    };
  @media (min-width: 576px) and (max-width: 767px){
    font-size: 40px;
    };
  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  margin: auto;

 
  @media screen and (max-width: 575px) {
    margin: auto;
    justify-content: center;
  
  }
`;

export const Links = styled(NavLink)`
  padding: 15px 30px;
  color: #fff;
  font-weight: 700;

  @media (min-width: 768px) and (max-width: 1280px){
    padding: 10px 15px;
    font-size: 12px;
    };
  @media (min-width: 576px) and (max-width: 767px){
  
    padding: 10px 15px;
    font-size: 12px;
    };
  @media screen and (max-width: 575px) {
    margin-top: 50px;
    padding: 10px 15px;
    font-size: 14px;
  }
`;
