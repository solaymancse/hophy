import React from "react";

import ServicesData from '../../ServicesListData.json'
import { Wrapper,H1,H2,P } from './ServicesListElements';

export const ServicesList = () => {
  return (
    <Wrapper>
     
        <div data-aos="fade-up">
          <H1 >OUR SERVICES</H1>
        </div>
        {ServicesData.map((data) => {
          return (
            <div data-aos="fade-up">
              <H2 >{data.title}</H2>
              <P >{data.text}</P>
            </div>
          );
        })}
     
    </Wrapper>
  );
};
