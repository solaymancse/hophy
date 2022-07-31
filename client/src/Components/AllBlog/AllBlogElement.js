import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 991px){
      flex-direction: column;
  }

`;
export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
 


`;
export const Card = styled.div`
  width: 400px;
  height: 400px;
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
export const H1 = styled.h1`
  margin-top: 50px;
  font-size: 18px;
  color: #34ace1;
  font-weight: bold;
`;
export const P = styled.p`

  font-size: 12px;
  
`;
export const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
  
`;
export const Top = styled.div`
display: flex;
justify-content: center;

  
`;
export const Bottom = styled.div`
margin-top: 50px;
p{
  text-align: justify;
}

  
`;
export const Img = styled.div`
position: relative;
flex: 4;
width:100%;
height: 600px;
img{
  width: 100%;
  height:100%;
 
}
  
`;
export const Cart = styled.div`
flex: 1;
background-color: #34ACE3;
padding: 30px ;

p{
  color: #fff;


}
h1{
  font-size: 30px;
  color: #fff;
  text-align: start;
}
  
`;
export const TopLink = styled.p`

  
`;
export const Link = styled(NavLink)`

  
`;
export const Links = styled(NavLink)`

  
`;
