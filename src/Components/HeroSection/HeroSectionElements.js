import styled from "styled-components";
import img from '../../images/slide1.jpg'

export const Wrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: bottom;
  background-size: cover;
  text-align: center;

  @media screen and (max-width: 575px) {
    height: 380px;
  }

  /* @media screen and (max-width: 991px){
    height: 500px;
  };

  @media screen and (min-width: 1280px) {
    height: 775px;
  };
  
  @media screen and (max-width: 1024px) {
    height: 550px;
    background-position: bottom;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 1440px) {
    height: 775px;
    background-position: bottom;
    text-align: center;
    align-items: center;
  } ; */
`;

export const Container = styled.div`
  margin: 0px 350px;
  position: relative;

  @media screen and (max-width: 575px) {
    margin: auto;
  }
 
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 200px;
  height: 400px;
  text-align: center;

  @media screen and (max-width: 575px) {
   top: 55px;
   height: 200px;
  }
`;
export const P = styled.div`
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
  animation: fadeInLeft 1s ease-in-out;
  font-family: "Inter", sans-serif;
`;
export const H1 = styled.div`
  font-size: 90px;
  font-weight: 900;
  color: #fff;
  margin-top: 0;
  line-height: 1.1;

  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;
export const Span = styled.div`
  font-size: 90px;
  color: #fff;
  font-weight: 300;

  
  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  margin-left: 420px;
  margin-top: 50px;

  @media screen and (max-width: 575px) {
    margin: auto;
    padding: 0px 45px;
  
  }
`;

export const Links = styled.a`
  padding: 15px 30px;
  color: #fff;
  font-weight: 700;

  
  @media screen and (max-width: 575px) {
    margin-top: 50px;
    padding: 10px 15px;
    font-size: 14px;
  }
`;
