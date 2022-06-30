import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.div`
  text-align: center;
  color: #34ace1;
  font-size: 18px;
  margin-bottom: 30px;
`;
export const Text = styled.div`
  width: 300px;
  margin: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    width: auto;
    font-size: 14px;
  }
`;

export const FlexBox = styled.div``;
export const Button = styled(NavLink)`
  text-decoration: none;
  background-color: #34ace1;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 10px 0;
  border-radius: 5px;

  &:hover {
    background-color: #01d8da;
    color: #fff;
  }
`;
export const Img = styled.img`
  height: 300px;
  width: 100%;
`;
