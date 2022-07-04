import React from "react";

import {
  Wrapper,
  Date,
  Title,
  H1,
  H2,
  Span,
  Img,
  Card,
  Image,
  More,
} from "./BlogPostElement";

import { Container } from "react-bootstrap";
import { FaUserMd } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { blogData } from "./../../Data";

export const BlogPost = () => {
  return (
    <Container>
      <H1>Health Blog</H1>
      <Wrapper>
        {blogData.map((data) => (
          <Card>
            <Image>
              <Img src={data.img} alt="" />
            </Image>
            <Date>{data.date}</Date>
            <Title>
              <a href="/">{data.title}</a>
            </Title>
            <H2>
              <Span>
                <FaUserMd />
                Linda Stivens
              </Span>
              <span>
                <BiComment /> 0 Commnets
              </span>
            </H2>
          </Card>
        ))}
      </Wrapper>
      <More>Read More</More>
    </Container>
  );
};
