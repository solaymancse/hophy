import styled from 'styled-components'

export const Div = styled.div`
    background: #34ACE1;
    height: 195px;
    width: 100%;
    display: block;
    overflow-x: hidden ;
    
    @media (min-width: 992px) and (max-width: 1200px){
        height: 100px;
    };
    @media (min-width: 768px) and (max-width: 991px){
        height: 82px;
    };
    @media (min-width: 576px) and (max-width: 767px){
        height: 75px;
        padding: 0px 120px;
    };

    @media screen and (max-width: 575px) {
        height: 70px;
        width: 100%;
        overflow-x: hidden;
  };

`;