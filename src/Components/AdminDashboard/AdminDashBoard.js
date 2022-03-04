import React from "react";

import logo from "../../images/brand5.png";
import { Wrapper, Login ,Left,Right,Img,Button,Div} from "./AdminDashboardElements";

export const AdminDashBoard = () => {
  return (
    <Wrapper class="main-wrapper login-body">
      <Login>
        <Left>
        <div class="login-left">
              <Img src={logo} alt="hophycare" />
            </div>
        </Left>
        <Right>
        <div class="login-right-wrap">
                <h1>Login</h1>
                <p class="account-subtitle">Access to Admin dashboard</p>

                <form action="" method="post">
                  <Div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Username"
                    />
                  </Div>
                  <Div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </Div>
                  <Div class="form-group">
                    <Button className="btn btn-block" type="submit">
                      Login
                    </Button>
                  </Div>
                </form>

                <div class="text-center forgotpass">
                  <a href="forgot-password.html">Forgot Password?</a>
                </div>

              </div>
        </Right>
     
      </Login>
    </Wrapper>
  );
};
