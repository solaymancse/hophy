import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  gap: 20px;

`;
export const Left = styled.div`
  flex: 2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Top = styled.div`
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
  height: 25vh;
`;
export const Bottom = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 0 20px;
`;
export const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  p {
    color: #34ace3;
  }
  img {
    width: 300px;
    height: 200px;
  }
`;
export const RightDiv = styled.div`
  width: 300px;
  height: 100px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.color};
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    cursor: pointer;
    transform: translateX(20px);
    transition: 0.5s;
  }
`;
export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 140px;
  height: 120px;
  border: 2px solid #fff;
  margin-top: -20px;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
export const H3 = styled.h3`
  font-size: 18px;
  color: #34ace3;
`;
export const Span = styled.span`
  font-size: 14px;
  color: gray;
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const H5 = styled.h5`
  font-size: 14px;
  color: gray;
`;
export const Information = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  gap: 30px;
  padding: 0 20px;
`;
export const LeftInfo = styled.div`
  flex: 1;
`;
export const RightInfo = styled.div`
  flex: 2;
`;
export const RightIcon = styled.div`
  flex: 1;
  text-align: center;
`;
export const Links = styled(NavLink)`
  margin-left: 20px;
`;
export const Title = styled.div`
  border-bottom: 1px solid lightgray;
  font-size: 14px;
  padding-bottom: 8px;
  text-transform: uppercase;
  color: #cecece;
  margin: 30px 0;
`;
export const Desc = styled.div`
  display: flex;
  gap: 20px;
`;
export const Div = styled.div`
  margin-bottom: 50px;
  width: 300px;
  height: 120px;
  background-color: ${(props) => props.color};
  border: none;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
export const LeftDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.div``;
export const ContactDesc = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding: 5px 0;
    gap: 20px;
    display: flex;
  }
`;
export const H2 = styled.h2`
  font-size: 14px;
  color: #34ace3;
`;
export const H1 = styled.h1`
  color: #fff;
  flex: 1;
  text-align: center;
`;
export const Para = styled.div`
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const BottomDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;
