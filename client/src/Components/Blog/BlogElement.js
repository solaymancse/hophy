import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 125px 0px;
  width: 100%;
  overflow-x: hidden;


  @media (min-width: 1441px) and (max-width: 1536px) {
  
  padding: 50px 0px;
}
  @media (min-width: 1281px) and (max-width: 1440px) {
   
   padding: 50px 0px;
 }
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 40px 0px;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    padding: 30px 0px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 30px 0px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 50px 0px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;
   
  }
`;
export const SecTitle = styled.div`
width: 100%;
  margin-bottom: 70px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const H2 = styled.div`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -1.377px;
  line-height: 1.1;
  margin-bottom: 25px;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`;
