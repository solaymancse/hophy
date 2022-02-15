import styled from "styled-components";
import { GiMicroscope, GiMedicalDrip } from "react-icons/gi";
import {
  FaAmbulance,
  FaWheelchair,
  FaUserMd,
  FaFileMedicalAlt,
} from "react-icons/fa";

export const Notes = styled(FaFileMedicalAlt)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const Microscope = styled(GiMicroscope)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const MedicalDrip = styled(GiMedicalDrip)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const Ambulance = styled(FaAmbulance)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const Wheelchair = styled(FaWheelchair)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const UserMd = styled(FaUserMd)`
  color: #34ace1;
  font-size: 72px;
  float: left;
  line-height: 1;
  margin-right: 26px;
  transition: all 0.3s;

  @media screen and (max-width: 575px) {
    font-size: 60px;
  }
`;
export const Title = styled.div`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -1.377px;
  line-height: 1.1;
  margin-bottom: 25px;
`;
export const P = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.3px;
  margin-bottom: 15px;
  text-transform: uppercase;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;
export const Span = styled.div`
  color: #34ace1;
  font-weight: 700;
  display: inline;
`;
export const Wrapper = styled.div`
  padding: 125px 0 180px;
  position: relative;

  @media screen and (max-width: 575px) {
    padding: 80px 0px 20px 0px;
  }
`;

export const Div = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
  }
`;
export const Items = styled.div`

`;
export const Content = styled.div`
  display: flex;
  margin-bottom: 70px;
  position: relative;
  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
  }


  
`;

export const ConText = styled.p`
  font-size: 13px;
  line-height: 24px;
  transition: all 0.3s;
  color: gray;
`;

export const Img = styled.img`
  max-width: 100%;
`;
export const Thumb = styled.div`
  top: 80px;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const H1 = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: #333;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 10px;
  margin-top: 0;

  @media screen and (max-width: 575px) {
    font-size: 12px;
}
`;
export const H2 = styled.h1`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -1.377px;
  line-height: 1.1;
  margin-bottom: 25px;
  font-family: "Inter", sans-serif;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`;
