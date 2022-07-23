import styled from "styled-components";

export const Div = styled.div`
background: #34ace3;
  height: 150px;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 991px) {
    height: 80px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
  
`;
