import styled from "styled-components";
import img from "../../images/testimonialBg1.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  padding-bottom: 125px;
  width: 100%;
`;
export const LogoArea = styled.div`
  border-top: 1px solid #dfdfdf;
  margin-top: 75px;
  padding-top: 100px;

  @media screen and (max-width: 575px) {
    padding-top: 50px;
  }
`;
