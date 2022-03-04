import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  padding-right: 30px;
  font-family: "Sarabun", sans-serif;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    color: #fff;

    &:after {
      content: "";
      border-bottom: 1px solid #fff;
      transform: translateX(0.2);
      width: 10px;
    }

    &:active {
      border-bottom: 1px solid #fff;
    }
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Tooglebar = styled.div`
 margin-right: 20px;

`;

export const Bars = styled(GoThreeBars)`
  font-size: 22px;
  color: #fff;
  display: none;

  @media screen and (max-width: 991px) {
    display: block;
    margin-top: -40px;
  }
`;

export const Div = styled.div`
  display: flex;
  margin-right: -20px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
