import styled from "styled-components";

export const Div = styled.div`
  background: #34ace1;
  height: 150px;
  width: 100%;

  @media screen and (max-width: 991px) {
    height: 80px;
    align-items: center;
  }
  @media screen and (max-width: 575px) {
    padding-top: 20px;
  }
`;
