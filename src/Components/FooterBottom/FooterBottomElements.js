import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 55px 0;
  position: relative;

  @media (min-width: 768px) and (max-width: 991px) {
    min-width: 768px;
    max-width: 991px;
    padding: 0 30px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    min-width: 320px;
    max-width: 480px;
    padding: 0 10px;
  }
`;
export const P = styled.p``;
