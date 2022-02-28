import React from "react";

import { Wrapper, Location, Title, Links } from "./ContactElements";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

export const Contact = () => {
  return (
    <Wrapper className="d-none d-lg-block">
        <div className="row row-cols-2">
          <div className="col">
            <Title>
              <Location />
              Chattogram Software Technology Park, 4100, Chittagong
            </Title>
          </div>
          <div className="col">
            <ul className=" text-end">
              <Links href="https://www.facebook.com/Hophycare">
                <FaFacebookF />
              </Links>
              <Links href="https://www.youtube.com/channel/UCYZXfIIJVO4ZDOfTBHbZ26w">
               
                <BsYoutube />
              </Links>
              <Links href="https://www.instagram.com/hophystartup/">
              
                <IoLogoInstagram />
              </Links>
              
              <Links href="https://www.linkedin.com/company/hophycare/?viewAsMember=true">
                
                <AiFillLinkedin />
              </Links>
            </ul>
          </div>
        </div>
    </Wrapper>
  );
};
