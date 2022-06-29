import styled from "styled-components";

export const Card = styled.div`
  width: 700px;
  height: 500px;
  padding-top: 50px;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  outline: none;
`;
export const P = styled.div`
  font-size: 16px;
  color: gray;
  margin-top: 10%;
`;
export const Title = styled.div`
  margin-top: 10%;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 50px;
  }
`;
