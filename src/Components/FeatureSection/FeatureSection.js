import React, { useEffect } from "react";

import {
  P,
  ConText,
  Wrapper,
  Items,
  Content,
  Img,
  Thumb,
  H1,
  H2,
  Span,
  Div,
} from "./FeatureSectionElements";
import doctor from "../../images/doctor-01.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { FeatureData } from "./FeatureData";

export const FeatureSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper>
      <div className="row" data-aos="fade-up">
        <div className="col-lg-12">
          <Div>
            <P>Why Choose Hophy Platform</P>
            <H2>
              <Span>The Best</Span> For Your Health{" "}
            </H2>
          </Div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-xl-8">
          <div className="row">
            {FeatureData.map((data) => {
              return (
                <div className="col-md-6" data-aos="fade-up">
                  <Items>
                    {data.icon}
                    <H1>{data.title}</H1>
                    <Content>
                      <ConText>{data.text}</ConText>
                    </Content>
                  </Items>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Thumb data-aos="fade-left">
        <Img src={doctor} />
      </Thumb>
    </Wrapper>
  );
};
