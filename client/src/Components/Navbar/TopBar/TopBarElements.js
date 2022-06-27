import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";

export const Wrapper = styled.div`
  background: #34ace1;
  

  
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 6px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 10px 0;
    margin: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 0;
    margin: 0;
  } ;
`;
export const Logo = styled.div`
  @media (max-width: 767px) {
    padding: 0;
    margin: 0;
  } ;
`;
export const Img = styled.img`
  height: 50px;
  width: 220px;

 
  @media (min-width: 992px) and (max-width: 1440px) {
    height: 50px;
    width: 190px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    height: 40px;
    width: 140px;
  }
  @media (min-width: 481px) and (max-width: 575px) {
    height: 35px;
    width: 134px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 30px;
    width: 135px;
  }
`;
export const Media = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Row = styled.div`
  display: flex;
  gap: 0px 50px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Col = styled.div`
  display: flex;
  gap: 0px 20px;
  margin-left: 30px;
`;

export const Icon = styled.div`
  margin-top: 5px;
  color: #fff;
  font-weight: 400px;
  font-size: 20px;
`;

export const H3 = styled.h3`
  font-size: 12px;
  color: #ccc;
  line-height: 1;
  margin-bottom: 5px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const H1 = styled.h1`
  font-size: 16px;
  color: #fff;
  font-weight: 700px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
`;
export const Span = styled.div``;
export const Tooglebar = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: block;
  }
`;

export const Bars = styled(GoThreeBars)`
  font-size: 22px;
  color: #fff;

  /* 
  @media screen and (max-width: 991px) {
    display: block;
    margin-top: -40px;
  } */
`;
