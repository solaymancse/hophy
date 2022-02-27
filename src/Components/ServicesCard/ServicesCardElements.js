import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 150px;

    @media (min-width: 320px) and (max-width: 480px) {
      margin-bottom: 80px;
  }

`;
export const P = styled.p`
  color: #999;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .3px;
    margin-bottom: 15px;
    text-transform: uppercase;

`;
export const H1 = styled.h1`

 
  

`;
export const FlexBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 350px;
  
 
  

`;
export const Items = styled.div`
  padding: 40px;
  width: 305px;
  height: 300px;
  border: 0.5px solid lightgray;

  &:hover{
    background: #F3F3F3;
    transition: 0.5s ease-in-out;
    cursor: pointer;

      &::before{
      background-color: #34ace3;
      content: "";
      height: 0;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      transition: all .1s;

      }
  }
  
 

`;
export const Icon = styled.div`
  font-size: 50px;
  color: #34ace3;

`;
export const Content = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 30px;
`;

export const H4 = styled.h4`
font-size: 20px;
color: #333;
font-weight: bold;
margin-top: 20px;
`;
export const H2 = styled.h2`
  font-size: 14px;
  color: #999;
  margin-top: 20px;

`;
export const Links = styled.h2`
  text-decoration: none;
  font-size: 14px;
  margin-top: 30px;
  color: #999;

  &:hover{
    color: #34ace3;
    cursor: pointer;
  }

`;
