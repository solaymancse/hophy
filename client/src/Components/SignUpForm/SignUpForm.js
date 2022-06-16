import React, { useState } from "react";

import Swal from 'sweetalert2'
import { Form } from 'react-bootstrap';
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
} from "../LoginForm/LoginFormElemenets";
import logo from '../../images/brand5.png'
import { MdCall } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = ({closeModal}) => {

  const history = useNavigate();
  const [user, setUser] = useState({
    phone: "",
    password:"",
  });

  const { phone, password } = user;

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/patientSignup", {
      phone,
      password,
    })
    .catch((err) => console.log(err))

    const data = await res.data;
    Swal.fire({
      icon: 'success',
      title: 'Welcome',
      text: "SuccessFull Logged In",
      
    })
    return data;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    sendRequest().then(()=> history('/patient/dashboard')).catch((err) => (
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        footer: '<a href="">Have You Fill Correct Number or Password ?</a>'
      })

    ));
  };
  return (
    <Container>
      <Left>
        <Img src={logo} alt="logo" />
      </Left>
      <Right>
        <Div>
          <H1>Sign Up</H1>
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
            required
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
            required
            />

            </InputBox>
          {/* <InputBox>
          <FaLock/>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            />

            </InputBox> */}
          <Button type="submit">Sign Up</Button>
          <Close >
            <GrFormClose onClick={closeModal} />
          </Close>
        </Form>
      </Right>
    </Container>
  );
};
