import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 30px 350px;
    width: 100%;
    height: 100vh;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1280px){
    padding: 0 100px;
  }
  @media (min-width: 481px) and (max-width: 767px){
    padding: 0 20px;
  }
    @media (min-width: 320px) and (max-width: 480px){
    padding: 0px 10px;
    }

`;
export const H1 = styled.h1`
   color: #34ace3;
   font-weight: 700;
   font-family: "Inter", sans-serif;
   padding-bottom: 50px;

   @media (min-width: 320px) and (max-width: 480px){
    padding-bottom: 10px;
    }

`;
export const H2 = styled.h2`

  

`;
export const P = styled.p`
color: #999;
text-align: justify;

    @media (min-width: 320px) and (max-width: 480px){
        font-size: 12px;
   
    }
    

`;