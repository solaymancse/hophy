import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 80px 80px;

  @media screen and (max-width: 575px) {
    padding: 40px 20px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  background-clip: inherit;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0;
  color: #000;
  font-size: 14px;
  height: auto;
  padding: 0 1px 10px;

  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
  }
`;
export const Div = styled.div`
  color: #999;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  position: relative;
`;

export const Text = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0;
  color: #000;
  font-size: 14px;
  height: 162px;
  padding: 0 1px;
  width: 100%;
`;

export const Textarea = styled.div`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  border-radius: 0;
  color: #000;
  font-size: 14px;
  height: 162px;
  padding: 0 1px;
  width: 100%;
`;
