import React from "react";
import { Span } from "../FeatureSection/FeatureSectionElements";
import {
  PostItem,
  Items,
  Thumb,
  Content,
  Title,
  Meta,
  Links,
  Img,
  A,
} from "./PostCardElements";

import { AiFillCalendar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { vlogData } from "../../Data";

export const PostCard = () => {
  return (
    <>
      <PostItem>
        {vlogData.map((data) => (
          <Items>
            <Thumb>
              <Links href="/">
                <Img src={data.img} alt="/" />
              </Links>
            </Thumb>
            <Content>
              <Title>
                <A href="/">{data.title}</A>
              </Title>
              <Meta>
                <a href="/">
                  <Span>
                    <AiFillCalendar />
                  </Span>
                  December 14th, 2022
                </a>
                <a href="/">
                  <Span>
                    <FaUserAlt />
                  </Span>
                  Admin
                </a>
              </Meta>
            </Content>
          </Items>
        ))}
      </PostItem>
    </>
  );
};
