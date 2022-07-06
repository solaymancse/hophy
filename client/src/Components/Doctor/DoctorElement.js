import styled from "styled-components";

export const Wrapper = styled.div``;
export const Top = styled.div`
  background-color: #01d8da;
  width: 100%;
  height: 10vh;
  padding: 20px 20px;
  p {
    color: #fff;
    font-weight: bold;
  }
`;
export const Bar = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  padding: 50px 20px 30px;

  p {
    color: #7e7e7e;
    font-size: 14px;
    font-weight: normal;
    margin-right: 30px;
    border: 0.5px solid #01d8da;
    padding: 10px 20px;
    border-radius: 20px;
  }
`;
export const Bottom = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Item = styled.div`
width: 350px;
padding: 30px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   a{
     margin-top: 20px;
     display: flex;
     justify-content: center;
     border: 0.5px solid #01d8da;
     padding: 10px;
     border-radius: 20px;
     color: #fff;
     background-color: #01d8da;
     text-align: center;
     text-decoration: none;

     &:hover{
      background-color: #fff;
      color: #7e7e7e;
      border: 0.5px solid #01d8da;
      transition: 0.3s ease-in-out;
     }
   }
`;
export const Thumb = styled.div``;
export const Img = styled.img``;
export const Details = styled.div`
text-align: center;
p{
  color:#7e7e7e;
  font-size: 14px;
}
`;
export const Title = styled.h1`
 font-size: 1.714em;
 line-height: 1.45em;
 margin-top: 15px;
`;
export const Degree = styled.div`
  color:#7e7e7e;
  font-size: 15px;
`;
