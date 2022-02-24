import React from "react";

import { Wrapper, Location, Title, Links } from "./ContactElements";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

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
              <Links href="https://www.facebook.com/Hophystartup">
                <FaFacebookF />
              </Links>
              <Links href="/">
               
                <BsTwitter />
              </Links>
              <Links href="https://www.instagram.com/hophystartup/">
              
                <IoLogoInstagram />
              </Links>
              <Links href="/">
                <FaWhatsapp />
              </Links>
              <Links href="hophystartup@gmail.com">
                
                <BiMailSend />
              </Links>
            </ul>
          </div>
        </div>
    </Wrapper>
  );
};
