import React from "react";

import { Container } from 'react-bootstrap';
import {

  Wrapper,
  Media,
  MediaBody,
  Title,
  P,
  Stethoscope,
  Brain,
  Wheelchair,
} from "./StaticMediaElements";

export const StaticMedia = () => {
  return (
    <Wrapper>
      <Container>
      <div className="row mb-n4">
        <div className="col-lg-4 col-sm-6 mb-4">
          <Media>
            <MediaBody>
              <Title>Diagonse</Title>
              <P>Examination & Diagonosis</P>
            </MediaBody>
            <Stethoscope />
          </Media>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <Media>
            <MediaBody>
              <Title>TREATMENT</Title>
              <P>Treatment of the disease</P>
            </MediaBody>
            <Brain />
          </Media>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <Media>
            <MediaBody>
              <Title>CARE HEALTHY</Title>
              <P>Care and recuperation</P>
            </MediaBody>
            <Wheelchair />
          </Media>
        </div>
      </div>
      </Container>
    </Wrapper>
  );
};
