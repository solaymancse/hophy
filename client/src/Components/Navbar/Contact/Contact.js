import React from "react";

import { Wrapper, Location, Title, Links } from "./ContactElements";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { Container } from 'react-bootstrap';

export const Contact = () => {
  return (
    <Wrapper className="d-none d-lg-block">
      <Container>
        <div className="row row-cols-2">
          <div className="col">
            <Title>
              <Location />
              Chattogram Software Technology Park, 4100, Chittagong
            </Title>
          </div>
          <div className="col">
            <ul className=" text-end">
              <Links target="_blank" href="https://www.facebook.com/Hophycare">
                <FaFacebookF />
              </Links>
              <Links target="_blank" href="https://www.youtube.com/channel/UCYZXfIIJVO4ZDOfTBHbZ26w">
               
                <BsYoutube />
              </Links>
              <Links target="_blank" href="https://www.instagram.com/hophystartup/">
              
                <IoLogoInstagram />
              </Links>
              
              <Links target="_blank" href="https://www.linkedin.com/company/hophycare/?viewAsMember=true">
                
                <AiFillLinkedin />
              </Links>
            </ul>
          </div>
        </div>
        </Container>
    </Wrapper>
  );
};
