import React,{useState,useEffect} from "react";

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
import axios  from 'axios';
axios.defaults.withCredentials = true;
const baseUrl = "http://localhost:5000/api";
export const BlogPost = () => {
  const [posts,setPosts] = useState([]);

  const postRequest = async ()=> {
    const res = await axios.get(`${baseUrl}/postslimit`,{
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
    <Container>
      <H1>Health Blog</H1>
      <Wrapper>
        {posts.map((data,index) => (
          <Card key={index}>
            <Image>
              <Img src={data.postImage} alt="" />
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
      <More to="/all-blog">Read More</More>
    </Container>
  );
};
