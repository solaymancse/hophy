import React, { useState } from "react";
import {Axios} from '../../../src/config'
import { useNavigate } from "react-router-dom";
import logo from "../../images/brand5.png";
import { FaUserAlt } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

import {
  Wrapper,
  Login,
  Left,
  Right,
  Img,
  Button,
  Div,
} from "../AdminLogin/AdminLoginElements";

export const TeamLogin = () => {
  const history = useNavigate();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = admin;
  const handleChange = (e) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendRequest = async () => {
    const res = await Axios
      .post("adminlogin", {
        email: email,
        password: password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then(() => history("/dashboard/admin"));
  };
  return (
    <Wrapper>
    <Login>
      <Left>
        <Img src={logo} alt="hophycare" />
      </Left>
      <Right>
        <div>
         <h1 style={{ fontSize: "22px" }}>Login</h1>
          <p>Access to Team dashboard</p>

          <form onSubmit={handleSubmit}>
            <Div>
              <FaUserAlt />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </Div>
            <Div>
              <IoIosLock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </Div> 
              <Button className="btn btn-block" type="submit">
                Login
              </Button>
          </form>

          <div className="text-center forgotpass">
            <a href="forgot-password.html">Forgot Password?</a>
          </div>
        </div>
      </Right>
    </Login>
  </Wrapper>
  )
}
