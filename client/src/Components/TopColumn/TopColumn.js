import React from "react";
import { Container } from "react-bootstrap";
import { topColumnData } from "../../Data";
import {
  Wrapper,
  CardBox,
  Title,
  Desc,
  Icon,
  Button,
} from "./TopColumnElement";

export const TopColumn = () => {
  return (
    <Container>
      <Wrapper>
        {topColumnData.map((data) => (
          <CardBox>
            <Icon>{data.icon}</Icon>

            <Title>{data.title}</Title>
            <Desc>
              {data.desc}
              <br />
              <p> {data.desc2}</p>
            </Desc>
            <Button href={data.link}>{data.linkTitle}</Button>
          </CardBox>
        ))}
      </Wrapper>
    </Container>
  );
};
