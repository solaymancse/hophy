import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdCall, MdLocationOn } from "react-icons/md";

export const Wrapper = styled.div`
  color: #707070;
  padding: 125px 0 100px;
  background: #333;

  @media screen and (max-width: 575px){
    padding: 70px 0 70px;
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
export const List = styled.div`
    border-top: 1px solid rgba(255,255,255,.25);
    display: flex;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 12px;
    padding-top: 4px;
    transition: all .3s;
    align-items: center;
    color: #fff;

`;

export const Contact = styled.div`


`;
export const Map = styled(MdLocationOn)`
     color: #fff;
     font-size: 30px;
     margin-right: 15px;
`;
export const Mail = styled(AiOutlineMail)`
   color: #fff;
     font-size: 25px;
     margin-right: 15px;
`;
export const Call = styled(MdCall)`
   color: #fff;
     font-size: 25px;
     margin-right: 15px;
`;
export const H4 = styled.h4`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -.522px;
    margin: 15px 0 70px;
    text-transform: uppercase;
    color: #fff;

    @media screen and (max-width: 575px){
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
