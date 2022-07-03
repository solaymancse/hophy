import React from 'react'
import { Span } from '../FeatureSection/FeatureSectionElements'
import { Card,PostItem,Items,Thumb,Content,Title,Meta,Links,Img,A } from './PostCardElements'
import img from '../../images/post1.jpg'
import { AiFillCalendar } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

export const PostCard = () => {
  return (
    <Card>
        <PostItem>
              <Items>
                <Thumb>
                  <Links href="/">
                    <Img src={img} alt='/'/>
                  </Links>
                </Thumb>
                <Content>
                  <Title>
                    <A href='/'>Problems About Social Insurance For Truck Driver</A>
                  </Title>
                  <Meta>
                  <a href='/'><Span><AiFillCalendar/></Span>December 14th, 2022<Span><FaUserAlt/></Span>Admin</a>
                  </Meta>
                </Content>
              </Items>
              
            </PostItem>

    </Card>
  )
}
