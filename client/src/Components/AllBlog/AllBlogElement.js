import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 991px){
      flex-direction: column;
  }

`;
export const H1 = styled.h1`
  margin-top: 50px;
  font-size: 18px;
  color: #34ace1;
  font-weight: bold;
`;
export const P = styled.p`

  font-size: 12px;
  
`;
export const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
  
`;
