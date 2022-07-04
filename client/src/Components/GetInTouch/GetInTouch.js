import React from "react";
import { Container } from "react-bootstrap";

import img from "../../images/doctor.jpg";
import {
  Wrapper,
  Left,
  Right,
  Div,
  Quote,
  H1,
  Button,
} from "./GetInTouchElements";

export const GetInTouch = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Div>
              <img src={img} alt="" />
              <Quote />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without
              </p>
            </Div>
            <Div>
              <img src={img} alt="" />
              <Quote />
              <p>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without
              </p>
            </Div>
          </Left>
          <Right>
            <H1>Get In Touch</H1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea type="text" placeholder="Message" />
              <Button>Send</Button>
            </form>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};
