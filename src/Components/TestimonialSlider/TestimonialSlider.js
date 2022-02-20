import React from "react";
import { Carousel } from "react-bootstrap";

import { TestimonialCard } from "../TestimonialCard/TestimonialCard";

export const TestimonialSlider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <div>
            <TestimonialCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <TestimonialCard />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <TestimonialCard />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
