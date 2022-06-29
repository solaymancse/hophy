import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Wrapper = styled.div`
position: relative;
  display: flex;
  gap: 5px;
  margin-top: -50px;
  z-index: 1;

  @media (min-width: 320px) and (max-width: 800px) {
    width: 100%;
    margin-top: 20px;
    flex-direction: column;
  }
`;
export const CardBox = styled(Card)`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  padding: 80px;
  background-color: #b9f7f9;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.5s all;

  p {
    margin-top: 30px;
  }

  &:hover {
    background-color: #d4fdfe;
    transform: scale(1.1);
    z-index: 2;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 40px 80px;
  }
  @media (min-width: 575px) and (max-width: 767px) {
    padding: 40px;
  }
  @media (min-width: 481px) and (max-width: 575px) {
    padding: 30px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px;
  }
`;

export const Icon = styled.div`
  font-size: 40px;
  color: #34ace1;
  font-weight: normal;
  
  @media (min-width: 801px) and (max-width: 991px) {
    font-size: 30px;
  }
`;
export const CardBody = styled.div`
  margin: 20px 0;
`;
export const Button = styled.a`
text-align: center;
width: 140px;
  text-decoration: none;
  padding: 20px;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #34ace1;
    background-color: #d9fbfc;
  }

`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #535b5b;
  margin-top: 20px;
`;
export const Desc = styled.p`
  margin: 20px 0 40px 0;
  font-size: 12px;
  color: #363636;
`;
