import React from "react";
import {
  Item,
  Thumb,
  Img,
  Details,
  Title,
  Degree,
} from "./../../Doctor/DoctorElement";
import {Wrapper} from './TeamCardElement'


export const TeamCard = ({data}) => {

  return (
    <Wrapper>
      {data.map((data, index) => (
        <Item key={index}>
          <Thumb>
            <Img src="" alt="doctor1" />
          </Thumb>
          <Details>
            <Title>{data.name}</Title>
            <p>{data.phone}</p>
            <Degree>{data.address}</Degree>
          </Details>
          <a href="/">View Profile</a>
        </Item>
      ))}
    </Wrapper>
  );
};
