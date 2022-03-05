import React,{ useState } from "react";

import logo from "../../images/brand5.png";
import { Wrapper, Login ,Left,Right,Img,Button,Div} from "./AdminLoginElements";

export const AdminLogin = () => {

  const [admin, setAdmin] = useState({
    phone:'',
    password: ''
  });

  const {phone,password} = admin;
  const handleChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
   
  }
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
                <h1 style={{fontSize:"22px"}}>Login</h1>
                <p class="account-subtitle">Access to Admin dashboard</p>

                <form onSubmit={handleSubmit} action="" method="post">
                  <Div class="form-group">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="Phone"
                      value={phone}
                      name="phone"
                      onChange={handleChange}
                    />
                  </Div>
                  <Div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={handleChange}
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
