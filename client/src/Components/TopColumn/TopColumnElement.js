import styled from 'styled-components';
import { Card } from "react-bootstrap";

export const Wrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: -50px;

    @media (min-width:320px) and (max-width: 480px){
      
        flex-direction: column;
    }
`
export const CardBox = styled(Card)`
    flex: 1;
    padding: 80px;
    background-color: #B9F7F9;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.5s all;
    a{
        text-decoration: none;
        padding: 20px 30px;
        background-color: #fff;
        border:none;
        border-radius: 30px;
        color: #333;
        font-size: 12px;
        font-weight: bold;
        transition:all .3s ease-in-out;
        &:hover{
            border: 1px solid #34ace1;
            background-color: #D9FBFC;
           
        }
    }
    p{
        margin-top: 30px;
    }

    &:hover{
        background-color: #D4FDFE;
        transform: scale(1.1);
        z-index: 2;
    }

    @media (min-width:320px) and (max-width: 480px){
      
      padding: 20px;
  }
`

export const Icon = styled.div`
    font-size: 40px;
    color: #34ACE1;
    font-weight: normal;
`
export const CardBody = styled.div`
    margin: 20px 0;
`
export const Title = styled.h2`
     font-size: 16px;
     font-weight: 600;
     color: #535B5B;
    
`
export const Desc = styled.p`
 margin: 20px 0 40px 0;
    font-size: 12px;
   color: #363636;
`