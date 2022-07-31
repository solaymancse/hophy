import React,{useState,useEffect} from "react";

import {
  Date,
  Title,
  H2,
  Span,
  Img,
  Image,
} from "../BlogPost/BlogPostElement";
import { FaUserMd } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { Navbar } from "./../Navbar/Navbar";
import { Wrapper, H1, P,Div,Card,Links } from "./AllBlogElement";
import { Footer } from "./../Footer/Footer";
import { Container } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios  from 'axios';
axios.defaults.withCredentials = true;
const baseUrl = "http://localhost:5000/api";
export const AllBlog = () => {
  const [posts,setPosts] = useState([]);

  const postRequest = async ()=> {
    const res = await axios.get(`${baseUrl}/allposts`,{
      withCredentials:true
    })
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }
  console.log(posts);
  useEffect(()=>{
    postRequest().then((data)=> setPosts(data))
  },[]);
  return (
    <div>
      <Navbar />
      <Container>
        <H1>All Blog Post</H1>
        <P>Blog/All Blog</P>
        <Wrapper>
          {posts.map((data,index) => (
            <Card data-aos="fade-up" key={index}>
              <Image>
                <Img src={data.postImage} alt="" />
              </Image>
              <Date>{data.date}</Date>
              <Title>
                <Links to={`/blog/${data._id}`}>{data.title}</Links>
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
