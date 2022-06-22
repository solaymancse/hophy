import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const Top = styled.div`
  right: 0;
  width: 600px;
  height: 400px;
  background-color: #34ace3;
  position: absolute;
`;
export const Bottom = styled.div`
  left: 0;
  bottom: 0;
  width: 800px;
  height: 350px;
  background-color: #62d3d5;
  position: absolute;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
`;
export const Left = styled.div`
    flex: 1;
   img{
       width: 100%;
       height: 80vh;
       object-fit: cover ;
   }
`;
export const Right = styled.div`
flex: 1;
`;
