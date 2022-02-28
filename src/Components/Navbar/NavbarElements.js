import styled from "styled-components";

export const Div = styled.div`
  background: #34ace1;
  height: 195px;
  width: 100%;
  padding: 0px 350px;


  @media (min-width: 1441px) and (max-width: 1536px) {
    padding: 0px 150px;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    padding: 0px 150px;
  }

  @media (min-width: 992px) and (max-width: 1280px) {
  
    padding: 5px 60px 0 60px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 80px;
    padding: 5px 60px 0 60px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 80px;
    padding: 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 80px;
    padding: 20px 0 0 0;
  }
`;
