import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./../Navbar/Navbar";
import { Footer } from "./../Footer/Footer";
import {
  EventContainer,
  Top,
  Bottom,
  Img,
  Cart,
  TopLink,
  Link,
} from "./AllBlogElement";
import { Container } from "react-bootstrap";
import { GetBlogById } from "../../httpServices/requests";

export const SingleBlog = () => {
  const history = useNavigate();
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    GetBlogById({ id })
      .then(({ data }) => setBlog(data))
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          history("/all-blog");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(blog.postImage);
  return (
    <div>
      <Navbar />
      <Container>
        <EventContainer>
          <TopLink>
            <Link to="/">Home</Link> / <Link to="/all-blog">Blog</Link> /
            {blog.title}
          </TopLink>
          <Top>
            <Img>
              <img src={blog.postImage} alt="" />
            </Img>
            <Cart>
              <p>Feature Posts</p>
              <h1>{blog.title}</h1>
            </Cart>
          </Top>
          <Bottom>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </Bottom>
        </EventContainer>
      </Container>
      <Footer />
    </div>
  );
};
