import { Wrapper, SecTitle, H2 } from "./BlogElement";

import { PostCard } from "../PostCard/PostCard";
import { Span } from "../FeatureSection/FeatureSectionElements";
import { AccordianSection } from "../AccordianSection/AccordianSection";

export const Blog = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-6">
          <SecTitle>
            <p></p>
            <H2>
              <Span>Tips &</Span> Tricks
            </H2>
          </SecTitle>
          {<PostCard />}
          {<PostCard />}
          {<PostCard />}
        </div>
        <div className="col-lg-6">
          <SecTitle>
            <p></p>
            <H2>
              <Span>FAQs</Span>
            </H2>
          </SecTitle>
          {<AccordianSection />}
        </div>
      </div>
    </Wrapper>
  );
};
