import  styled  from "styled-components";

export const Navbar = styled.div`
    background-color: rgb(255,255,255);
    color: rgb(31,32,34);
    display: flex;
    justify-content: center ;
    width: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    
`;


export const NavWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex ;
    align-items: center;
    justify-content: space-between ;
   
`;
export const Button = styled.button`
    
`;
export const Img = styled.img`
border-radius: 50%;
width: 30px;
height: 30px;
    
`;
export const Left = styled.div`
    display: flex;
    width: 300px;
    height: 40px;
    align-items: center ;
    border-bottom: 0.5px solid lightgray;
    &:hover{
      
        box-shadow: 10px;
    }
`;
export const Icon = styled.div`
   font-size: 18px;
   flex: 1;
    
`;

export const Input = styled.input`
    border: none;
    background-color: #EBEBEB ;
    background: transparent!important;
    border-radius: 20px!important;
    height: 100%;
    width: 100%;
    flex: 6;
    outline: none;

    &:hover{
        cursor: text ;
        
    }

    
    
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
`;
