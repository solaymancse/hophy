import styled from "styled-components";
import img from "../../images/testimonialBg1.jpg";

export const Wrapper = styled.div`
  background-image: url(${img});
  padding: 125px 350px;


  @media (min-width: 1441px) and (max-width: 1536px) {
  
    padding: 50px 150px;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
   
   padding: 50px 60px;
 }
  @media (min-width: 1025px) and (max-width: 1280px) {
   
   padding: 40px 50px;
 }

 @media (min-width: 992px) and (max-width: 1024px) {
    padding: 30px 30px;
    
  }
  @media (min-width: 768px) and (max-width: 991px) {
    
    padding: 50px 30px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 30px;
    padding: 30px 30px;
  }
  
`;
