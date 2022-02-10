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
    Color: #333;
    margin-right: 15px;



`;

export const Title = styled.p`
    color: #fff;
    margin-top: 15px;
    


`;
export const Icons = styled.div`
   color: #fff;
   display: flex;
   gap: 15px;
`;

export const Links = styled.a`
    text-decoration:none;
    color: #fff;

    &:hover{
        color: #333;
        transition: 0.2s;
    }


`;