import styled from "styled-components";
import img from "../../images/serviceCover.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100vw;
  box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.5);
`;
export const Content = styled.div`
  position: relative;

  
  
`;
export const ServiceArea = styled.div`
margin-top: 150px;
 
  width: 100vw;


  
  
`;
export const ContentItems = styled.div`

  position: absolute;
  top: 150px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const P = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.411px;
  margin-bottom: 34px;
  text-transform: uppercase;
`;
export const H1 = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 90px;
  font-weight: 800;
  letter-spacing: -2.04px;
  line-height: 100px;
  margin-bottom: 10px;
  text-align: center;
  word-spacing: 10px;
`;
