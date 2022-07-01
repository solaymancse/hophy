import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Div = styled.div`

    


`

export const Links = styled(NavLink)`
    text-decoration: none;
    color: #333;
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;

    &.active{
        color: #34ace3;
        border-bottom: 1px solid #34ace1;
        padding-bottom: 10px;
    }
   

`
export const Img = styled.img`
    width: 180px;
    height: 40px;

`
