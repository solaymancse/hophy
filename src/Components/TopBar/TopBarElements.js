import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 4px;

  /* @media (min-width: 992px) and (max-width: 1200px){
        height: 100px;
    }; */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding-top: 10px;
  }
  @media screen and (max-width: 575px) {
    margin: 0;
    padding: 0;
  } ;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;


  @media (min-width: 1025px) and (max-width: 1280px) {
  
    padding: 0;
    margin: 0;
  
}
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 0;
    margin: 0;
  } ;
`;
export const Logo = styled.div`


  @media (min-width: 576px) and (max-width: 767px) {
    padding: 0;
    margin: 0;
  } ;
`;
export const Img = styled.img`
  height: 80px;
  width: 300px;
  margin-left: -30px;

  @media (min-width: 1025px) and (max-width: 1280px) {
  
    height: 70px;
    width: 160px;
}

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 60px;
    width: 140px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 50px;
    width: 150px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 10px;
    height: 50px;
    width: 150px;
    margin-left: -6px;
  }
`;
export const Media = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Row = styled.div`
  display: flex;
  gap: 0px 50px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Col = styled.div`
  display: flex;
  gap: 0px 20px;
  margin-left: 30px;


`;

export const Icon = styled.div`
  margin-top: 5px;
  color: #fff;
  font-weight: 400px;
  font-size: 20px;
`;

export const H3 = styled.h3`
  font-size: 12px;
  color: #ccc;
  line-height: 1;
  margin-bottom: 5px;

  @media (min-width: 1025px) and (max-width: 1280px) {
  
    font-size: 14px;
}

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  
  
}
`;

export const H1 = styled.h1`
  font-size: 18px;
  color: #fff;
  font-weight: 700px;

  @media (min-width: 1025px) and (max-width: 1280px) {
  
  font-size: 14px;
}
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  
  
}

  
`;

export const H2 = styled.h2`
  font-size: 24px;
`;
export const Span = styled.div``;
