import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

import { Wrapper, P } from "./FooterBottomElements";
import { Span } from "./../FeatureSection/FeatureSectionElements";


export const FooterBottom = () => {
  return (
    <Wrapper>
      
              <P>
                <MdOutlineCopyright /> 2022 <Span>HOPHYCARE</Span> - Health care.
              </P>

    </Wrapper>
  );
};
