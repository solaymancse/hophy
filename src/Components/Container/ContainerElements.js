import styled from 'styled-components'


export const Container = styled.div`
    margin: 0px 350px;

    @media (min-width: 992px) and (max-width: 1200px){
        margin: 0px 50px;
    };
    @media (min-width: 768px) and (max-width: 991px){
        margin: 0px 50px;
    };
    @media (min-width: 576px) and (max-width: 767px){
        margin: 0px 10px;
    };

    @media screen and (max-width: 575px) {
        margin: 0px 10px;
  };

`;