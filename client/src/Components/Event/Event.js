import React ,{useState,useEffect} from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillCalendar } from "react-icons/ai";
import { Container } from "react-bootstrap";
import {Axios} from '../../httpServices/requests'
import {

  Wrapper,
  Card,
  Top,
  Bottom,
  Content,
  H1,
  Desc,
  Date,
  Title,
  Heading
} from "./EventElement";

export const Event = () => {
  const [posts,setPosts] = useState([]);

  const postRequest = async ()=> {
    const res = await Axios.get('allposts',{
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
        <Heading>EVENTS</Heading>
      <Wrapper>
       {posts.map((post,index)=> (
         <Card key={index}>
         <Top bgImg={post.postImage}>
           <Content >
             <H1>{post.title}</H1>
             <Desc>
               {post.miniDesc}
               <br />
               on Octobar 16,2022
             </Desc>
           </Content>
         </Top>
         <Bottom>
           <Date><AiFillCalendar/>16 Oct, 2022</Date>
           <Title>{post.title}</Title>
           <HiOutlineArrowNarrowRight />
         </Bottom>
       </Card>
       ))}
      
       
      </Wrapper>
    </Container>
  );
};
