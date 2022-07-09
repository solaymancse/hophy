import  styled  from 'styled-components';

import Calendar from 'react-calendar';
export const Wrapper = styled.div`
margin-top: 100px;
    display: flex;
    gap: 50px;

`
export const Left = styled.div`
width: 100%;

    flex: 1;
`
export const CalenderDiv = styled(Calendar)`
width: 100%;
height: 50vh;
    flex: 1;
`
export const Right = styled.div`
    flex: 1;
`