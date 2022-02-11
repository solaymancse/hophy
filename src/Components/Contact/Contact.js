import React from "react";
import { Div, Location, Icons, Title, Links } from "./ContactElements";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

export const Contact = () => {
  return (
    <Div>
      <div>
        <Title>
          <Location />
          Chattogram Software Technology Park, 4100, Chittagong
        </Title>
      </div>
      <Icons>
        <Links href="/">
          <FaFacebookF />
        </Links>
        <Links href="/">
          {" "}
          <BsTwitter />
        </Links>
        <Links href="/">
          {" "}
          <IoLogoInstagram />
        </Links>
        <Links href="/">
          <FaWhatsapp />
        </Links>
        <Links href="/">
          {" "}
          <BiMailSend />
        </Links>
      </Icons>
     
    </Div>
      
  );
};
