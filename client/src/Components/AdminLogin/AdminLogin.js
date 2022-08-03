import React, { useState } from "react";

import {Axios} from '../../config/index';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useDispatch } from "react-redux";
import { authActions } from "./../../Store/index";
import logo from "../../images/brand5.png";
import {
  Wrapper,
  Login,
  Left,
  Right,
  Img,
  Button,
  Div,
} from "./AdminLoginElements";

export const AdminLogin = () => {
  const dispatch = useDispatch();
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
      .post(`adminlogin`, {
        email: email,
        password: password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    swal({
      title: "Welcome Anik",
      text: data.message,
      icon: "success",
      button: "Aww yiss!",
    });
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then(() => dispatch(authActions.login()))
      .then(() => history("/dashboard/admin"))
      .catch((err) => {
        swal({
          title: "Oops!!",
          text: err.data.message,
          icon: "error",
          button: "Ok!",
        });
      });
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
            <p>Access to Admin dashboard</p>

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
  );
};
