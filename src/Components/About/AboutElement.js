import styled from "styled-components";
import img from "../../images/about1.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.3);

  @media (min-width: 320px) and (max-width: 480px) {
    height: 345px;
    padding: 0;
   
  }
`;
export const ContentItems = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    top: 50px;
    height: 200px;
  }
`;
export const Span = styled.span`
  color: #fff;
  font-weight: 600;
  margin-right: 20px;

  @media (min-width: 320px) and (max-width: 480px){
    margin-right: 10px;
  }
`;
export const MainDiv = styled.div`
  padding: 0 350px;
  margin-top: 50px;
  width: 100%;

  @media (min-width: 1281px) and (max-width: 1440px) {
    padding: 0 70px;
  }
 

  @media (min-width: 992px) and (max-width: 1280px) {
    margin-top: 0px;
    padding: 0px 40px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 0px;
    padding: 0px 30px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 0px;
    padding: 0px 10px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0px;
    padding:0 0 0 20px;
  }
`;
export const H2 = styled.h2`
  color: #333;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 50px;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const H3 = styled.h3`
  margin-top: 50px;
  text-align: justify;
`;
export const H6 = styled.h6`
  margin-top: 50px;
  color: #333;
  font-family: "Inter", sans-serif;
  text-align: justify;
`;
export const H4 = styled.h4`
  color: #333;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const Items = styled.div``;
export const List = styled.a`
  text-decoration: none;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #34ace3;
  }
`;

export const Div = styled.div`
  margin-top: 100px;

  
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 70px;
  
  }
`;
