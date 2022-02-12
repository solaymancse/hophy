import React, { useEffect } from "react";
import {
  Wrapper,
  Container,
  P,
  Content,
  H1,
  Span,
  Button,
  Links,
} from "./HeroSectionElements";
import Aos from "aos";
import "aos/dist/aos.css";

export const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <div className="row">
          <div className="col-12">
            <Content>
              <P>FEEL THE DIFFERENCE WITH US</P>
              <H1 data-aos="fade-right">
                Your Heath Is <br />
                <Span>Our Priority</Span>
              </H1>
              <Button>
                <Links className="btn btn-danger me-3 animated delay1" href="/">
                  GET A QUOTE
                </Links>
                <Links
                  className="btn btn-outline-info animated delay2"
                  href="/"
                >
                  OUR SERVICES
                </Links>
              </Button>
            </Content>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
