import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 50px 150px;

    @media (min-width: 992px) and (max-width: 1280px){
        padding: 50px 40px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        padding: 50px 30px;
    }
    @media (min-width: 481px) and (max-width: 767px){
        padding: 50px 20px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        padding: 50px 20px;
    }

`;