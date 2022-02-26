import styled from "styled-components";
import img from "../../images/testimonialBg1.jpg";


export const Wrapper = styled.div`
  background-image: url(${img});
  padding-bottom: 125px;
  padding: 0 350px;
  width: 100%;


  @media (min-width: 1281px) and (max-width: 1440px) {
   
   padding: 0px 60px;
 }
  @media (min-width: 1025px) and (max-width: 1280px) {
   
   padding: 0px 50px;
 }

 @media (min-width: 992px) and (max-width: 1024px) {
    padding: 0px 30px;
    
  }
  @media (min-width: 768px) and (max-width: 991px){
       
       padding: 0 30px;
    }
 
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 30px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
   
    padding: 0 10px;
  }
  
`;
export const LogoArea = styled.div`
  border-top: 1px solid #dfdfdf;
  margin-top: 75px;
  padding-top: 100px;

  @media screen and (max-width: 575px){
    padding-top: 50px;
  }
`;

