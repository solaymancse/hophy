import React from "react";

import {
  Date,
  Title,
  H2,
  Span,
  Img,
  Card,
  Image,
} from "../BlogPost/BlogPostElement";
import { FaUserMd } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { Navbar } from "./../Navbar/Navbar";
import { Wrapper, H1, P,Div } from "./AllBlogElement";
import { Footer } from "./../Footer/Footer";
import { blogData } from "./../../Data";
import { Container } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const AllBlog = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <H1>All Blog Post</H1>
        <P>Blog/All Blog</P>
        <Wrapper>
          {blogData.map((data,index) => (
            <Card data-aos="fade-up" key={index}>
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
        <Wrapper>
          {blogData.map((data,index) => (
            <Card data-aos="fade-up" key={index}>
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
        <Div>
          <Stack spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </Div>
      </Container>
      <Footer />
    </div>
  );
};
