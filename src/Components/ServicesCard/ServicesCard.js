import React from "react";

import { Container } from "./../Container/ContainerElements";
import {
  Wrapper,
  P,
  H1,
  FlexBox
 
} from "./ServicesCardElements";

import { Span } from "./../FeatureSection/FeatureSectionElements";
import { ServiceCardItems } from './ServiceCardItems';
import Data from '../../ServicesCardData.json'

export const ServicesCard = () => {

  return (
    <Container>
      <Wrapper>
        <div className="row">
          <div className="col-lg-12">
            <P>OUR SERVICES</P>
            <H1>
              <Span>Best Solution </Span> For Your Health
            </H1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FlexBox>
                {Data.map((items)=>  <ServiceCardItems titleText={items.title} patext={items.p}/>)}
            
              
            </FlexBox>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};
