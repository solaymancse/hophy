import React from "react";
import { Wrapper, Location, Title, Links } from "./ContactElements";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { Container } from "./../Container/ContainerElements";

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
            </ul>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
