import styled from "styled-components";
import { FaStethoscope, FaWheelchair } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 350px;


  @media (min-width: 1281px) and (max-width: 1440px){
    padding: 0px 60px;
  }
 
  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 50px;
    padding: 0 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 50px;
    padding: 0 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 30px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    min-width: 320px;
    max-width: 480px;
    padding: 0 10px;
  }
`;
export const Stethoscope = styled(FaStethoscope)`
  font-size: 50px;
  color: #34ace1;

  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;
export const Wheelchair = styled(FaWheelchair)`
  font-size: 50px;
  color: #34ace1;

  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;
export const Brain = styled(GiBrain)`
  font-size: 50px;
  color: #34ace1;

  @media screen and (max-width: 575px) {
    font-size: 40px;
  }
`;

export const Media = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 90px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 20px;
  }
  @media screen and (max-width: 575px) {
    padding-top: 20px;
  }
`;
export const MediaBody = styled.div`
  flex: 1 1;
`;
export const Title = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  font-size: 24px;
  color: #000;
  margin-bottom: 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
  }
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`;
export const P = styled.div`
  color: #666;
  font-size: 14px;
`;
