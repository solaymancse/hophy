import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: center;
`;
export const Heading = styled.h1`
margin-top: 20px;
 font-weight: 700;
 font-family: "Ibarra Real Nova", serif;
  
`;
export const Card = styled.div`
  width: 400px;
  height: 400px;
  
`;
export const Top = styled.div`
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    ${(props) => `url(${props.bgImg})`};
  height: 250px;
  opacity: 0.1 #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;
export const Bottom = styled.div`
  margin-left: 30px;
  background-color: #fff;
  border: 1px solid lightgray;
  position: relative;
  height: 150px;
  top: -50px;
  z-index: 1;
  padding: 30px;
`;
export const H1 = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  height: 20px;
  font-family: "Ibarra Real Nova", serif;
`;
export const Desc = styled.p`
  color: #fff;
  text-align: center;
`;
export const Date = styled.h3`
display: flex;
gap: 5px;
  font-size: 16px;
  font-family: "Ibarra Real Nova", serif;
`;
export const Content = styled.div``;
export const Title = styled.h2`
  font-size: 20px;
  font-family: "Ibarra Real Nova", serif;
  font-weight: 700;
`;
