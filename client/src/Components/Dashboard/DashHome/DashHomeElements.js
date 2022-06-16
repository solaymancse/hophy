import styled from 'styled-components';

export const Center = styled.div`
margin: 20px 0;
display: flex;
gap: 20px;
`
export const Left = styled.div`
    flex: 1;
   padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    h1{
        font-size: 16px;
        color: gray;
    }
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h2{
        font-size: 16px;
        margin: 15px 0;
        color: gray;
    }
    p{
        color: gray;
        font-size: 14px;
    }
`
export const Amount = styled.div`
   font-size: 40px;
   margin-bottom: 10px;
`
export const Feature = styled.div`
   width: 100px;
   height: 100px;
   margin: auto;
`
export const Right = styled.div`
    flex: 2;   
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const Summary = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 10px 20px;

   h3{
       font-size: 14px;
       color: gray;
   }

   p{
       display: flex;
       align-items: center;
       color: red;
   }
`