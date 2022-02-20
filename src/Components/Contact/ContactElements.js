import styled from "styled-components";
import { ImLocation2 } from "react-icons/im";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`;
export const Location = styled(ImLocation2)`
  color: #fff;
  margin-right: 15px;

`;

export const Title = styled.p`
  color: #fff;

  
`;
export const Icons = styled.div`
  color: #fff;
  display: flex;
  gap: 15px;
`;

export const Links = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0px 10px;

  &:hover {
    color: #333;
    transition: 0.2s;
  }
`;
