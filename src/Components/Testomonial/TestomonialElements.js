import styled from "styled-components";
import img from "../../images/testimonialBg1.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  padding: 125px 350px;


  
  @media (min-width: 1025px) and (max-width: 1280px) {
   
   padding: 40px 50px;
 }
  @media (min-width: 768px) and (max-width: 1024px) {
    
    padding: 0px 30px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 100px 30px;
  }
  
`;
