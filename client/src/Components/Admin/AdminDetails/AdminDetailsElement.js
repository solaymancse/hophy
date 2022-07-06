import styled from "styled-components";

export const Top = styled.div`
  padding: 20px;
  height: 15vh;
  background-color: #01d8da;
  margin: 0 0 60px 0;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  p {
    font-weight: bold;
    color: #fff;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: none;
  background-color: #fff;
  transition: 0.3s ease-in-out;
  color: #333;
  border-radius: 50%;
  font-size: 25px;

  &:hover {
    background-color: lightgray;
    transition: 0.3s ease-in-out;
  }
`;
