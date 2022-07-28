import React, { useState } from "react";

import { Wrapper } from "./PostsElement";
import axios from 'axios';


export const Posts = () => {
 
  const [post, setPost] = useState({
    title:'',
    postImage:'',
    miniDesc:'',
    description:''
  });
 
const {postImage,title,miniDesc,description} = post;
  const handleChange = (e) => {
    setPost({...post,[e.target.name]:e.target.value});
  };
  const handleFileChange = (e) => {
    
    setPost({...post,postImage:e.target.files[0]});
    console.log(post.postImage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("postImage", postImage);
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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input className="form-control"
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
          className="form-control-file"
        />
        <input
          type="text"
          name="miniDesc"
          placeholder="Description"
          onChange={handleChange}
          className="form-control"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="form-control"
        />
       <button type="submit">Add post</button>
      </form>
    </Wrapper>
  );
};
