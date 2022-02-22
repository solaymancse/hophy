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
  position: relative;
  display: block;
  margin-bottom: 100px;
  
`;
export const Heading = styled.div`
  position: absolute;
  top: 100px;
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
`;
export const P = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 1;
    letter-spacing: .411px;
    margin-bottom: 34px;
    font-weight: 600;
    text-transform: uppercase;
`;
export const Span = styled.span`
  color: #fff;
  font-weight: 600;
  margin-right: 20px;
  
`;
export const H1 = styled.h1`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 90px;
  font-weight: 800;
  letter-spacing: -2.04px;
  line-height: 100px;
  margin-bottom: 10px;
  
`;
export const MainDiv = styled.div`

`;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const Items = styled.div``;
export const List = styled.a``;

export const Div = styled.div``;