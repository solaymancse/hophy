import styled from "styled-components";

export const Div = styled.div`
  background: #34ace1;
  height: 195px;
  width: 100%;
  display: block;
  padding: 0px 350px;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 195px;
    padding: 0 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 195px;
    padding: 0 50px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    height: 80px;
    padding: 0;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    height: 80px;
    padding: 0;
  }
  /* @media (min-width: 576px) and (max-width: 767px){
     
        height: 75px;
        padding: 0px 120px;
    };

    @media screen and (max-width: 575px) {
        height: 70px;
        padding: 0;
    
  }; */
`;
