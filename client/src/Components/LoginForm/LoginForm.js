import React, { useState } from "react";

import logo from "../../images/brand5.png";
import {
  Container,
  Left,
  Right,
  Img,
  Input,
  H1,
  Button,
  Div,
  Icon,
  Profile,
  Close,
  InputBox
} from "./LoginFormElemenets";
import { Form } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { MdCall } from 'react-icons/md';
import { FaLock } from "react-icons/fa";

export const LoginForm = ({ closeModal }) => {
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });
  const { phone, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <Container>
      <Left>
        <Img src={logo} alt="logo" />
      </Left>
      <Right>
        <Div>
          <H1>Log In</H1>
          <Icon>
            <Profile />
          </Icon>
        </Div>
        <Form method="post" onSubmit={handleSubmit}>
          <InputBox>
            <MdCall/>
          <Input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          </InputBox>
          <InputBox>
          <FaLock/>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            />

            </InputBox>
          <Button type="submit">Login</Button>
          <a href="/forgetPassword">Forget Password ?</a>
          <Close >
            <GrFormClose onClick={closeModal} />
          </Close>
        </Form>
      </Right>
    </Container>
  );
};
