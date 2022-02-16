import styled from 'styled-components'
import img from '../../images/testimonialBg1.jpg'


export const Wrapper = styled.div`
    background-image: url(${img});
    padding-top: 125px;

    @media screen and (max-width: 575px){
        padding-top: 80px;
    }
`;