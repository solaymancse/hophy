import React from "react";
import { Container } from "../Container/ContainerElements";
import { Content,P,H1 } from "../Services/ServicesElemnents";
import {
  Wrapper,
  H4,
  H2,
  H3,
  Items,
  List,
  Span,
  MainDiv,
  Div,
  ContentItems,
  H6
} from "./AboutElement";

export const About = () => {
  const ListArray = [
    "PSYCHIATRY",
    "OPTHALMOLOGY",
    "CARDIOLOGY",
    "IMMUMNOLOGY",
    "HEMATOLOGY",
    "LABORATORY",
    "ONCOLOGY",
    "DENTAL",
    "PSYCHIATRY",
    "OPTHALMOLOGY",
    "CARDIOLOGY",
    "IMMUMNOLOGY",
  ];
  return (
    <>
      <Wrapper>
        <Container>
          <Content>
            <ContentItems>
              <P>HOPHY MEDICAL CENTER</P>
              <H1>
                <Span>About</Span>HophyCare
              </H1>
            </ContentItems>
          </Content>
        </Container>
      </Wrapper>
      <Container>
        <MainDiv className="row">
          <Div className="col-lg-12">
            <H2>
              Home+Physician+Care = HophyCare! Sounds Interesting right?<br/>
              HophyCare is a Bangladeshi HealthTech StartUp. For the first time,
              we are providing a complete healthcare ecosystem in your home.
              HealthCare at Home is challenging for the country. But we love to
              take challenges with your trust and our passion to provide a
              one-stop health care service at home to make ourselves your
              trusted Health Partners. When time is short! We get busy in our
              daily life. At that moment, we don’t have time for long waits in a
              doctor’s Chamber for a convenient appointment. Also, we have
              elderly family and paralyze members who can’t properly move or are
              not fit to go to Doctor Chamber. Sometimes we need some basic
              tests for them like Blood Sugar, CBC, PBF, Hormone, Serum
              Creatinine, Uric Acid, TSH, etc. We also search for someone who
              can provide personal care to help our patients & elderly in all
              their daily routine activities and maintaining personal
              instruction. Even in some urgent cases, we are looking for an
              Emergency Ambulance middle at night. But it’s really hard to get
              by in such a short time. Don't worry, we understand your pain and
              concern. You are in the right place HophyCare is there for you and
              your family. We created a true comprehensive all-in-one healthcare
              service at home think about your problem. We believe in the power
              of one-to-one care and recovery at the same time. Now All
              HophyCare services at home in a single click.
            </H2>
          </Div>
          <Div className="col-lg-12">
            <H4>SERVICES</H4>
            <H3>
              It was a big, round room with a high arched roof, and the walls
              and ceiling and floor were covered with large emeralds set closely
              together.
            </H3>
            <H6>
              In a word, the whale was seized and sold, and his Grace the Duke
              of Wellington received the money. Thinking that viewed in some
              particular lights, the case might by a bare possibility in some
              small degree be deemed, under the circumstances, a rather hard
              one, an honest clergyman of the town addressed a note to his
              Grace.
            </H6>
          </Div>
          <Div className="col-lg-12">
            {ListArray.map((item) => (
              <Items>
                <List>{item}</List>
              </Items>
            ))}
          </Div>
          <Div className="col-lg-12"></Div>
        </MainDiv>
      </Container>
    </>
  );
};
