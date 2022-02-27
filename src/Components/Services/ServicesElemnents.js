import styled from "styled-components";
import img from "../../images/serviceCover.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  width: 100%;
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.5);

  @media (min-width: 320px) and (max-width: 480px) {
    height: 385px;
    padding: 0 50px;
  }
`;
export const Content = styled.div`
  position: relative;
  background: red;

  @media (min-width: 320px) and (max-width: 480px) {
    
  }



`;
export const ServiceArea = styled.div`
  margin-top: 150px;
  
  width: 100vw;

  @media (min-width: 1281px) and (max-width: 1440px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 50px;
    padding: 0 10px;
  }
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
  

  @media (min-width: 320px) and (max-width: 480px) {
    top: 50px;
  }
`;
export const P = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.411px;
  margin-bottom: 34px;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
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


  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 60px;
    letter-spacing: 0;
    line-height: 60px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 25px;
    letter-spacing: 0;
    line-height: 40px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
    letter-spacing: 0;
    line-height: 40px;
  }
`;
