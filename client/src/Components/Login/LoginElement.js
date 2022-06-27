import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: ${props=>props.borderColor};
  padding: 10px 20px;
  color: #333;
  background-color: #fff;

  &:hover{
      background-color: #34ace3;
      color: #fff;
      transition: .5s;
  }
`;
