import React from "react";
import img from "../../images/doc2.jpg";
import { Span } from "../FeatureSection/FeatureSectionElements";
import { Card, Img, P, Title } from "./TestimonialCardElements";
import { RiDoubleQuotesL ,RiDoubleQuotesR } from 'react-icons/ri';

export const TestimonialCard = () => {
  return (
    <div>
      <Card>
        <div className="row">
          <div className="col-lg-12">
            <Img src={img} />
          </div>
          <div className="col-lg-12">
            <P><RiDoubleQuotesL/>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available<RiDoubleQuotesR/>
            </P>
          </div>
          <div className="col-lg-12">
            <Title><Span>Dr. Kristina Castle</Span><br/>Khulshi Lotus Apartment, Khulshi, Chattogram</Title>
          </div>
        </div>
      </Card>
    </div>
  );
};
