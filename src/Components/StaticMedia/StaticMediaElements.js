import styled from "styled-components";
import { FaStethoscope, FaWheelchair } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

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

export const Wrapper = styled.div`
  @media screen and (max-width: 575px) {
    padding-top: 50px;
  }
`;
export const Media = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 90px;

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

  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`;
export const P = styled.div`
  color: #666;
  font-size: 14px;
`;
