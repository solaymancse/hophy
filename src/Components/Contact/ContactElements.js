import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";

export const Div = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  };

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 40px;
    justify-content: space-between;
    
  };

  @media screen and (max-width: 1440px) {
    width: 100%;
    height: 40px;
    justify-content: space-between;
    
  };
`;
export const Location = styled(ImLocation2)`
  color: #fff;
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 8px;
  }
`;

export const Title = styled.p`
  color: #fff;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 8px;
  }
`;
export const Icons = styled.div`
  color: #fff;
  display: flex;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    gap: 10px;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #333;
    transition: 0.2s;
  }
`;
