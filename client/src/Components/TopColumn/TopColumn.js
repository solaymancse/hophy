import React from "react";
import { Container } from "react-bootstrap";
import { topColumnData } from "../../Data";
import { Wrapper,CardBox,CardBody,Title,Desc,Icon} from "./TopColumnElement";

export const TopColumn = () => {
  return (
    <Container>
      <Wrapper>
        {topColumnData.map((data) => (
          <CardBox style={{ width: "18rem" }}>
           <Icon>{data.icon}</Icon>
            <CardBody>
              <Title>{data.title}</Title>
              <Desc>
                {data.desc}<br/>
               <p> {data.desc2}</p>
              </Desc>
              <a href={data.link} variant="primary">{data.linkTitle}</a>
            </CardBody>
          </CardBox>
        ))}
      </Wrapper>
    </Container>
  );
};
