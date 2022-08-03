import React, { useState, useEffect } from "react";

import {
  Container,
  Left,
  Right,
  Img,
  Top,
  Bottom,
  ProfileImage,
  H3,
  Span,
  Description,
  H5,
  Information,
  LeftInfo,
  RightInfo,
  Title,
  Desc,
  Div,
  H2,
  ContactDesc,
  Icon,
  H1,
  Para,
  LeftDesc,
  RightDiv,
  Links,
  RightIcon,
  BottomDiv,
} from "./ProfileElements";
import img from "../../images/banner1.jpg";
import img1 from "../../images/pro.jpg";
import img3 from "../../images/img3.png";
import { MdLocationPin } from "react-icons/md";
import { contactInfoData, rightDivData } from "../../Data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { engagedData } from "./../../Data";
import {Axios} from '../../httpServices/requests'



export const Profile = () => {
  const [admin, setAdmin] = useState();
  console.log(admin);

  const sendRequest = async () => {
    const res = await Axios
      .get("user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setAdmin(data.user));
  }, []);
  return (
    <Container>
      <Left>
        <Top>
          <Img src={img} alt="banner" />
        </Top>
        <Bottom>
          <ProfileImage>
            <img src={img1} alt="" />
          </ProfileImage>
          <Description>
            <div>
              {admin && <H3>{admin.name}</H3>}
              {admin && <Span>{admin.title}</Span>}
            </div>
            <div>
              <H5>
                BSc In CSE
                <br />
                Premier University Chittagong
              </H5>
            </div>
          </Description>
        </Bottom>
        <Information>
          <LeftInfo>
            <Title>Performance</Title>
            <LeftDesc>
              <Div color="#1cefff">
                <H1>30</H1>
                <Para>
                  Total
                  <br />
                  Awards
                </Para>
              </Div>
              <Div color="#4ecdc4">
                <H1>50</H1>
                <Para>
                  Total
                  <br />
                  Participants
                </Para>
              </Div>
            </LeftDesc>
          </LeftInfo>
          <RightInfo>
            <div>
              <Title>Location</Title>
              <Desc>
                <MdLocationPin />
                <H2>
                  Nondon Kanon no lane.
                  <br /> Bismillah Bhaban{" "}
                </H2>
              </Desc>
            </div>
            <div>
              <Title>Contact Information</Title>
              {contactInfoData.map((data) => (
                <ContactDesc key={data._id}>
                  <H2>
                    <Icon>{data.icon}</Icon>
                    {data.title} :<Span>{data.value}</Span>
                  </H2>
                </ContactDesc>
              ))}
            </div>
            <div>
              <Title>Basic Information</Title>
              <Desc>
                <H2>
                  Blood Group: <Span>O+</Span>
                </H2>
              </Desc>
            </div>
          </RightInfo>
        </Information>
      </Left>
      <Right>
        <div>
          <p>Team Profile</p>
          {rightDivData.map((data) => (
            <RightDiv color={data.color}>
              <RightIcon>{data.icon}</RightIcon>
              <div>
                {data.title}
                <Links to={data.link}>
                  <BsFillArrowRightCircleFill />
                </Links>
              </div>
            </RightDiv>
          ))}
        </div>
        <div>
          <p>Avarage Engagement Reach</p>
          {engagedData.map((data) => (
            <BottomDiv>
              <div>{data.icon}</div>
              <div>{data.title} Engaged</div>
            </BottomDiv>
          ))}
          <img src={img3} alt="" />
        </div>
      </Right>
    </Container>
  );
};
