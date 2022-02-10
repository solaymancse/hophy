import React from "react";
import {
  Wrapper,
  Container,
  Content,
  P,
  H1,
  Span,
  Button,
  Links
} from "./HeroSectionElements";

export const HeroSection = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <P>FEEL THE DIFFERENCE WITH US</P>
          <H1>
            Your Heath Is <br />
            <Span>Our Priority</Span>
          </H1>
          <Button>
            <Links className="btn btn-danger me-3 animated delay1" href="/">
              GET A QUOTE
            </Links>
            <Links className="btn btn-outline-info animated delay2" href="/">
              OUR SERVICES
            </Links>
          </Button>
        </Content>
      </Container>
    </Wrapper>
  );
};
