import React from "react";


import { doctorData } from './../../Data';
import {

  Wrapper,
  Top,
  Bar,
  Bottom,
  Item,
  Thumb,
  Img,
  Details,
  Title,
  Degree,
} from "./DoctorElement";

export const Doctor = () => {
  return (
    <>
      <Wrapper>
        <Top>
          <p>All Doctors List</p>
          <Bar>
            <p>Permanent</p>
            <p>Consultant</p>
          </Bar>
        </Top>
        <Bottom>
          {doctorData.map((data,index)=> (

            <Item key={index}>
            <Thumb>
              <Img src={data.img} alt="doctor1" />
            </Thumb>
            <Details>
              <Title>{data.title}</Title>
              <p>{data.des}</p>
              <Degree>
               {data.degree}
              </Degree>
            </Details>
            <a href="/">View Profile</a>
          </Item>
            ))}
        </Bottom>
      </Wrapper>
    </>
  );
};
