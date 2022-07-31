import React, { useState,useEffect } from "react";

import { Wrapper } from "./PostsElement";
import axios from 'axios';
import { PostTable } from './PostTable';


export const Posts = () => {
  const [getPosts,setGetPosts] = useState([]);

  const postRequest = async ()=> {
    const res = await axios.get('http://localhost:5000/api/allposts',{
      withCredentials:true
    })
    .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  }

  useEffect(()=>{
    postRequest().then((data)=> setGetPosts(data))
  },[]);
  const [post, setPost] = useState({});
  const [file, setFile] = useState('');
 
const {postImage,title,miniDesc,description} = post;
  const handleChange = (e) => {
    setPost({...post,[e.target.name]:e.target.value});
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("postImage", file);
    formData.append("title", title);
    formData.append("miniDesc", miniDesc);
    formData.append("description", description);

   axios.post("http://localhost:5000/api/addpost", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.error(err);
      });
console.log(title,miniDesc,description,postImage);
 
  };
  return (
    <Wrapper>
      <form className="form-group" onSubmit={handleSubmit} encType="multipart/form-data">
        <input className="form-control mb-2"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="file"
          name="postImage"
          placeholder="Image"
          onChange={handleFileChange}
          className="form-control-file mb-2"
        />
        <input
          type="text"
          name="miniDesc"
          placeholder="Description"
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="form-control mb-2"
        />
       <button type="submit"  className="btn btn-primary">Add post</button>
      </form>
      <PostTable data={getPosts}/>
    </Wrapper>
  );
};
