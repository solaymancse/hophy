import React, { useState } from "react";

import { Form } from "react-bootstrap";
import { Wrapper, Input, Div,Text } from "./AppointmentFromElements";

export const AppointmentForm = () => {

  const [appointment,setAppointment] = useState({
    name:'',
    email:'',
    phone:'',
    date:'',
    message:''
  })
  const {name,email,phone,date,message} = appointment;
  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    console.log(appointment);
  } 
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="phone"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <Div className="form-group ">
             
                <Input
                  className="form-control"
                  type="date"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                />
              
            </Div>
          </div>
          <div className="col-md-12">
            <div className="form-group ">
              <Text
                name="message"
                value={message}
                onChange={handleChange}
                rows="7"
                placeholder="Your Message Here....."
              ></Text>
            </div>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
