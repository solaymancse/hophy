import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 0 50px 0;
  display: flex;
  gap: 20px;

  @media (max-width: 991px){
      flex-direction: column;
  }
`;
export const H1 = styled.h1`
  font-size: 35px;
  color: #34ace1;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
  position: relative;

  &::after{
      content:'';
      position: absolute;
      width: 150px;
      height: 3px;
      background-color: #34ace1;
      left: 44%;
      top: 50px;

      @media (max-width: 991px){
      left: 30%;
  }
  }
`;
export const Img = styled.img`

  width: 100%;
  height: 300px;
  object-fit: cover;
  transform: scale(1);
  transition: 0.5s ease-in-out;

  &:hover{
      transform: scale(1.5);
      
  }
 
`;
export const Image = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  overflow: hidden;
 
`;

export const Card = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
      cursor: pointer;
      img{
        transform: scale(1.5);
      }
     

  }

  @media (max-width: 991px){
      width: 100%;
  }
  
`;

export const Date = styled.div`
  background-color: #34ace1;
  padding: 10px;
  width: 200px;
  text-align: center;
  color: #fff;
  top: -22px;
  left: 50%;
  transform: translate(-50%);
  position: relative;
`;
export const Title = styled.div`
  font-size: 24px;
  text-align: center;

  a{
    text-decoration: none;
  color: #333333;
  }
  
`;
export const H2 = styled.h2`
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  color: #34ace1;
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const More = styled.div`
width: 150px;
display: flex;
justify-content: center;
margin: auto;
align-items: center;
  background-color: #fff;
  border: 1px solid #34ace3;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  color: #333333;
  

  &:hover{
      cursor: pointer;
      background-color: #34ace1;
      transition: 0.3s ease-in-out;
      color: #fff;
  }
`;
