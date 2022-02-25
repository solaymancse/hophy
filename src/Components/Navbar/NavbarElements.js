import styled from "styled-components";

export const Div = styled.div`
  background: #34ace1;
  height: 195px;
  width: 100%;
  padding: 0px 350px;

 
  @media (min-width: 1281px) and (max-width: 1440px) {
    padding: 0px 150px;
  }

  @media (min-width: 992px) and (max-width: 1280px) {
    padding: 0px 60px;
  }

  @media screen and (max-width: 991px) {
    height: 80px;
    padding: 0 60px;
  }
`;
