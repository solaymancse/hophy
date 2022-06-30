import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
gap: 20px;
padding: 20px 0;
`
export const Left = styled.div`
display: flex;
gap: 20px;
flex:1;
flex-direction: column;


`
export const Top = styled.div`
flex: 1;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
width: 100%;
padding: 20px;
text-align: center;
justify-content: space-between;
`
export const Img = styled.img`
border-radius: 50%;
margin-bottom: 30px;

`
export const Bottom = styled.div`
padding: 20px;
flex: 1;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

p{
    color: #6c757d;
    font-size: 13px;
}
`
export const Right = styled.div`
background-color: #fff;
padding: 20px 50px;
flex: 2;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export const H1 = styled.h1`
font-size: 16px;
font-weight: bold;
`
export const Span = styled.span`
color: gray;
font-size: 14px;
`
export const Desc = styled.p`
margin: 10px 0;
font-size: 15px;
`
export const Button = styled.button`
    border: none;
    padding: 10px 15px;
    color: #fff;
    font-size: 12px;
    background-color: #01D8DA;
    border-radius: 20px;

    &:hover{
        background-color: #fff;
        color: #333;
        border: 1px solid #333;
    }
`
export const H2 = styled.h2`
text-align: center;
    font-size: 16px;
    padding: 10px;
    color: #333;
    border: 1px solid #34ace1;
    width: 100px;
    border-radius: 20px;
`
export const Description = styled.p`
    font-size: 15px;
    display: flex;
    text-align: justify;
    margin-top: 20px;
    color: #424242;
`
export const Degree = styled.div`
    
`
export const H3 = styled.h3`
padding-bottom: 10px;
font-size: 16px;
border-bottom: 1px solid lightgray ;
font-weight: bold;
`
export const H4 = styled.h4`
padding-bottom: 10px;
font-size: 16px;
border-bottom: 1px solid lightgray ;
font-weight: bold;
color: #222222;
`