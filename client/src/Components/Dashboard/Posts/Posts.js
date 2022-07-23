import React from 'react'

import {Wrapper} from './PostsElement'
export const Posts = () => {
  return (
    <Wrapper>
        <input type='text' placeholder='Title'/>
        <input type='file' placeholder='Image'/>
        <input type='text' placeholder='Description'/>
        <input type='submit' placeholder='Add Post'/>
        
    </Wrapper>
  )
}
