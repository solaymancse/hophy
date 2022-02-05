import styled from 'styled-components'
import { ImLocation2 } from 'react-icons/im'

export const Div = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 768px){
        display: none;
    }

`;
export const Location = styled(ImLocation2)`
    Color: #CACCCC;
    margin-right: 15px;



`;

export const Title = styled.p`
    color: #333;
    font-family: 'Playfair Display', serif;


`;
export const Icons = styled.div`
   color: #333;
   display: flex;
   gap: 10px;
`;

export const Links = styled.a`
    text-decoration:none;
    color: #333;

    &:hover{
        color: #fff;
        transition: 0.2s;
    }


`;