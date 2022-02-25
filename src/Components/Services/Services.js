import React from "react";

import {
  Wrapper,
  Content,
  ContentItems,
  P,
  H1,
  ServiceArea,
} from "./ServicesElemnents";
import { ServicesCard } from "./../ServicesCard/ServicesCard";
import { Testomonial } from "./../Testomonial/Testomonial";
import { OurPartnar } from "./../OurPartnar/OurPartnar";

export const Services = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <ContentItems>
            <P>BEST SOLUTION FOR YOUR HEALTH</P>
            <H1>
              SERVICES THAT
              <br /> WE PROVIDE
            </H1>
          </ContentItems>
        </Content>
      </Wrapper>
      <ServiceArea>
        <ServicesCard />
        <Testomonial />
        <OurPartnar />
      </ServiceArea>
    </>
  );
};
