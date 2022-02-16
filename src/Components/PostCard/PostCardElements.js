import styled from "styled-components";

export const Card = styled.div``;

export const PostItem = styled.div`
  padding-right: 69px;

  @media screen and (max-width: 575px){
    display: block;
    padding: 0px;
}
  
`;
export const Items = styled.div`
  border-bottom: 1px solid rgba(51, 51, 51, 0.15);
  margin-bottom: 27px;
  padding-bottom: 24px;

  @media screen and (max-width: 575px){
    padding: 0;
   


  }
`;
export const Thumb = styled.div`
    float: left;
    min-width: 138px;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 575px){
        float: none;
    margin-right: 0;
    margin-bottom: 20px;
    }


`;
export const Content = styled.div``;
export const A = styled.a`
color: #333;
    text-decoration: none;
    transition: all .3s;

  
`;
export const Title = styled.div`
        color: #333;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -.25px;
    margin-bottom: 7px;
    position: relative;
    top: -5px;

    @media screen and (max-width: 575px){
        font-size: 16px;
    }

`;
export const Meta = styled.div`
    color: #999;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 0;

    @media screen and (max-width: 575px){
        padding-bottom: 15px;
    }
`;
export const Links = styled.a`
    color: #8f1b1b;
    text-decoration: none;
    transition: all .3s;
`;
export const Img = styled.img`
    width: 100%;
    
    transition: all .3s;
`;
