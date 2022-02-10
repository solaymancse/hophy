import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://hope-react.pages.dev/img/slider/slide1.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
 
`;

export const Container = styled.div`
    margin: 0px 350px;
    position: relative;

`;
export const Content = styled.div`
  position: absolute;
  width:100%;
  top: 200px;
  height: 400px;
  text-align: center;
 
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
`;

export const Links = styled.a`
padding: 15px 30px;
color: #fff;
font-weight: 700;


`;
