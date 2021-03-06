import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  gap: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px){
    flex-direction: column;
    text-align: center;
  }
`;
const H1 = styled.h1`
  color: #34ace3;
  font-size: 60px;
  font-weight: bolder;

  @media (max-width: 768px){
    font-size: 30px;
  }
`;
const H2 = styled.h2`
  color: #212121;
  font-family: "Roboto Slab", serif;
  font-weight: 600;

  
`;
const Desc = styled.p`
  color: gray;
  margin-bottom: 50px;
`;
const Links = styled.a`
  border-radius: 10px;
  text-decoration: none;
  background-color: #34ace3;
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 20px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px){
  font-size: 10px;
}

  &:hover {
   color: #fff;
    
  }
`;

export const ErrorPage = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <H1>:(</H1>
        </div>
        <div>
          <H2>404 - PAGE NOT FOUND</H2>
          <Desc>
            The page you are looking for might have been removed
            <br />
            had its name changed or is temporarily unavailable
          </Desc>
          <Links href="/">GO TO HOMEPAGE</Links>
        </div>
      </Content>
    </Wrapper>
  );
};
