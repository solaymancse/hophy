import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  padding: 55px 0;
  position: relative;
  display: flex;
 justify-content: center;
 align-items: center;


  
  @media (min-width: 1281px) and (max-width: 1440px) {
   
   padding: 0 60px;
 }
  @media (min-width: 992px) and (max-width: 1280px) {
   
    padding: 0 30px;
  }
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
export const P = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 5px;
`;
