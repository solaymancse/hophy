import React from "react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillCalendar } from "react-icons/ai";
import { Container } from "react-bootstrap";
import img from '../../images/e1.jpg'
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
  return (
    <Container>
        <Heading>EVENTS</Heading>
      <Wrapper>
        <Card>
          <Top bgImg={img}>
            <Content >
              <H1>Event Trends Live IMEX</H1>
              <Desc>
                Join us for the next webinar
                <br />
                on Octobar 16,2022
              </Desc>
            </Content>
          </Top>
          <Bottom>
            <Date><AiFillCalendar/>16 Oct, 2022</Date>
            <Title>Event Trends Live form IMex</Title>
            <HiOutlineArrowNarrowRight />
          </Bottom>
        </Card>
        <Card>
          <Top bgImg={img}>
            <Content >
              <H1>Event Trends Live IMEX</H1>
              <Desc>
                Join us for the next webinar
                <br />
                on Octobar 16,2022
              </Desc>
            </Content>
          </Top>
          <Bottom>
            <Date><AiFillCalendar/>16 Oct, 2022</Date>
            <Title>Event Trends Live form IMex</Title>
            <HiOutlineArrowNarrowRight />
          </Bottom>
        </Card>
        <Card>
          <Top bgImg={img}>
            <Content >
              <H1>Event Trends Live IMEX</H1>
              <Desc>
                Join us for the next webinar
                <br />
                on Octobar 16,2022
              </Desc>
            </Content>
          </Top>
          <Bottom>
            <Date><AiFillCalendar/>16 Oct, 2022</Date>
            <Title>Event Trends Live form IMex</Title>
            <HiOutlineArrowNarrowRight />
          </Bottom>
        </Card>
      </Wrapper>
    </Container>
  );
};
