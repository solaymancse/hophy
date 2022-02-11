import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://hope-react.pages.dev/img/slider/slide1.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;


    
  @media screen and (max-width: 1024px){
    height: 550px;
    background-position: bottom;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 1440px){
    height: 775px;
    background-position: bottom;
    text-align: center;
    align-items: center;
  

  }
 
`;

export const Container = styled.div`
    margin: 0px 350px;
    position: relative;

    @media screen and (max-width: 1024px){
      margin: 0px 150px;
    }

`;
export const Content = styled.div`
  position: absolute;
  width:100%;
  top: 200px;
  height: 400px;
  text-align: center;

  @media screen and (max-width: 1024px){
    width: 100%;

  }
 
`;
export const P = styled.div`
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
  animation: fadeInLeft 1s ease-in-out;
  font-family: 'Inter', sans-serif;
`;
export const H1 = styled.div`
  font-size: 90px;
  font-weight: 900;
  color: #fff;
  margin-top: 0;
  line-height: 1.1;

  @media screen and (max-width: 1024px){
    font-size: 60px;
  }
`;
export const Span = styled.div`
  font-size: 90px;
  color: #fff;
  font-weight: 300;
`;
export const Button = styled.div`
  display: flex;
 margin-left: 420px;
 margin-top: 50px;

 @media screen and (max-width: 1440px){
  margin-left: 200px;
  margin-top: 70px;
 }
`;

export const Links = styled.a`
padding: 15px 30px;
color: #fff;
font-weight: 700;


`;
