import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  border: ${props=>props.borderColor};
  padding: 10px 20px;
  color: #7e7e7e;
  background-color: #fff;

  &:hover{
      background-color: #34ace3;
      color: #fff;
      transition: .5s;
  }
`;
