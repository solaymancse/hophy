import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f3f3f3;
`;

export const Appointment = styled.div`
  position: relative;
  z-index: 2;
  border: 1px solid #34ace3;
  background-color: #fff;
  box-shadow: 0 50px 120px 0 rgb(68 89 89 / 15%);
  margin: 0 auto;
  text-align: center;
  top: -150px;

  @media screen and (max-width: 575px) {
    top: 80px;
  }

  /* @media (min-width: 1200px) {
    max-width: 1100px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 1200px) {
    margin: -125px auto 0;
  } */
`;
export const FormHead = styled.div`
  padding: 80px 0;
`;
export const SecTitle = styled.div`
  margin-bottom: 80px;

  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
  }
`;
export const P = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.3px;
  margin-bottom: 15px;
  text-transform: uppercase;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;
export const H2 = styled.div`
  font-size: 48px;
  font-weight: 300;
  letter-spacing: -1.377px;
  line-height: 1.1;
  margin-bottom: 25px;

  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.428px;
  margin-top: 40px;
  min-height: 62px;
  padding: 0 47.43px;
  text-transform: uppercase;
  color: #fff;
  background: #34ace1;

  @media screen and (max-width: 575px) {
    margin-top: -10px;
    font-size: 16px;
    min-height: 50px;
    padding: 0 20px;
  }
`;
