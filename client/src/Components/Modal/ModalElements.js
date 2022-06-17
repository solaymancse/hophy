import styled from 'styled-components';

export const Top = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;

h2{
    font-size: 16px;
    font-weight: bold;
    color:#34ACE3;
    text-align: center;
    padding-left: 40px;
}
button{
    border: none;
    background-color: #fff;
}

`
export const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding-right: 30px;
padding-left: 40px;

input{
    padding: 10px;
    width: 500px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
    outline: none;

    &:nth-last-child(1){
        background-color: #34ACE3;
        color: #fff;
        
        &:hover{
            background-color: #F7BAC5;
            border-color:#F7BAC5;
        }
    }
}



`
