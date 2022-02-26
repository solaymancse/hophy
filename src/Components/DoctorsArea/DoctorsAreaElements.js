import styled from 'styled-components'

export const Wrapper = styled.div`
   
   width: 100%;
   padding: 50px 350px;
  

   @media (min-width: 1281px) and (max-width: 1440px) {
   
   padding: 60px 60px;
 }
   @media (min-width: 1025px) and (max-width: 1280px) {
   
    padding: 50px 50px;
  }
    @media (min-width: 768px) and (max-width: 1024px) {
   
    padding: 50px 30px;

  }

    @media (min-width: 481px) and (max-width: 767px) {
      padding: 0 10px;

  
}
    @media (min-width: 320px) and (max-width: 480px) {

    padding: 0 10px;
    margin-top: 150px;
  }

`;
export const SecTitle = styled.div`
        margin-bottom: 64px;
        text-align: center;
`;
export const Title = styled.title``;

export const P = styled.p`
    color: #999;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .3px;
    margin-bottom: 15px;
    text-transform: uppercase;


`;
export const H2 = styled.h2`
     font-size: 48px;
    font-weight: 300;
    letter-spacing: -1.377px;
    line-height: 1.1;
    margin-bottom: 25px;

    @media screen and (max-width: 575px){
    font-size: 25px;
  }
`;