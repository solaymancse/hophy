import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";


export const Wrapper = styled.div`
    width: 100%;
  

`;
export const Container = styled.div``;
export const Div = styled.div`
display: flex;
    padding-left: 13px ;
    padding-right: 10px ;
`;
export const P = styled.p`
    font-size: 13px;
`;
export const List = styled.div``;
export const Title = styled.div`
    font-size: 14px;
`;
export const Location = styled(ImLocation2)``;
export const Navbar = styled.div`
    padding: 30px 20px;
`;
export const Links = styled(NavLink)`
    text-decoration: none;
    color: #333;
    display: block;
    border-bottom:1px solid rgba(255, 255, 255, 0.25);
    padding: 10px 0;
    font-weight: 600;

    &:hover{
        color: #34ace3;
    }
  

`;
export const Items = styled.ul`
    margin-left: -30px;
    display: none;
`;
export const ContactDiv = styled.div`
margin-top: 30px;
    margin-left: 20px;
`;
