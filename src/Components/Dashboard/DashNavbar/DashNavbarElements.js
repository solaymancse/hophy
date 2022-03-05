import  styled  from "styled-components";

export const Navbar = styled.div`
    background-color: rgb(255,255,255);
    color: rgb(31,32,34);
    display: flex;
    justify-content: center ;
    width: 100%;
    padding: 0 30px;
    
`;


export const NavWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex ;
    justify-content: space-between ;
    padding: 20px 100px ;
`;
export const Button = styled.button`
    
`;
export const Img = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
    
`;
export const Left = styled.div`
    display: flex;
    width: 300px;
    border: 0.5px solid rgb(255,255,255,.5);
    height: 40px;
    border-radius: 20px ;
    justify-content: center ;
    align-items: center ;
    background-color: #EBEBEB ;
`;
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    
`;
export const Input = styled.input`
    border: none;
    background-color: #EBEBEB ;
    
`;
