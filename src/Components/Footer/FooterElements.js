import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall, MdLocationOn } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";

export const Wrapper = styled.div`
  color: #707070;
  padding: 125px 350px 100px;
  background: #333;
  width: 100%;


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
    padding: 20px 30px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 20px 10px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    min-width: 320px;
    max-width: 480px;
    padding: 0 10px;
  }
`;
export const FooterLogo = styled.div`
  display: inline-block;
  margin-bottom: 50px;
`;

export const Img = styled.img`
  height: 50px;
  width: 180px;
`;
export const List = styled.a`
  text-decoration: none;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 12px;
  padding-top: 5px;
  transition: all 0.3s;
  align-items: center;
  color: ${(props)=> props.color};

  &:hover {
    color: #34ace3;
  }
`;

export const Contact = styled.div`
color: ${(props)=> props.color}

`;
export const Map = styled(MdLocationOn)`
  color: ${(props)=> props.color};
  font-size: 30px;
  margin-right: 15px;
`;
export const Mail = styled(AiOutlineMail)`
color: ${(props)=> props.color};
  font-size: 25px;
  margin-right: 15px;
`;
export const Call = styled(MdCall)`
color: ${(props)=> props.color};
  font-size: 25px;
  margin-right: 15px;
`;
export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.522px;
  margin: 15px 0 70px;
  text-transform: uppercase;
  color: #fff;

  @media screen and (max-width: 575px) {
    margin: 50px 0 20px;
  }
`;

export const WidgetNews = styled.div`
  border-bottom: 1px solid #e1e1e1;
  margin-top: -7px;
  padding-bottom: 41px;
`;

export const WidgetSocial = styled.div`
  margin-bottom: 0;
  margin-left: -1px;
  margin-top: 14px;
`;
export const InputDiv = styled.div`
  display: flex;
  padding-left: 20px;
`;
export const NewsForm = styled.div`
  background-color: #f8f8f8;
  box-shadow: none;
  margin: 0;
  padding: 0;
`;
export const P = styled.p`
  letter-spacing: 0;
  line-height: 26px;
  margin-bottom: 24px;
`;
export const Arrow = styled(BsArrowRightCircleFill)`
 margin-right: 20px;
`;
