import React from "react";
import { Container } from "../Container/ContainerElements";
import { Wrapper, Heading, P,H4, H1,H2,H3,Items,List, Span,MainDiv,Div } from "./AboutElement";

export const About = () => {
  const ListArray = ["PSYCHIATRY","OPTHALMOLOGY","CARDIOLOGY","IMMUMNOLOGY","HEMATOLOGY","LABORATORY","ONCOLOGY","DENTAL","PSYCHIATRY","OPTHALMOLOGY","CARDIOLOGY","IMMUMNOLOGY"];
  return (
    <Wrapper>
      <Container>
        <Heading>
          <P>HOPE MEDICAL CENTER</P>
          <H1>
            <Span>About</Span>Hophy
          </H1>
        </Heading>
        <MainDiv className="row">
          <Div className="col-lg-12">
            <H2>We make digital products and help organistation big and small connect with their audience.</H2>
          </Div>
          <Div className="col-lg-12">
            <H4>SERVICES</H4>
            <H3>It was a big, round room with a high arched roof, and the walls and ceiling and floor were covered with large emeralds set closely together.</H3>
            <p>In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances, a rather hard one, an honest clergyman of the town addressed a note to his Grace.</p>
          </Div>
          <Div className="col-lg-12">
            {ListArray.map((item)=> 
            <Items>
              <List>{item}</List>
              
            </Items>
            )}
          </Div>
          <Div className="col-lg-12"></Div>
        
        </MainDiv>
      </Container>
    </Wrapper>
  );
};
