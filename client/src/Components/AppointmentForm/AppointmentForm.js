import React from "react";
import { Form } from "react-bootstrap";
import { Wrapper, Input, Div,Text } from "./AppointmentFromElements";

export const AppointmentForm = () => {
  return (
    <Wrapper>
      <Form method="post">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <Input
                className="form-control"
                type="phone"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
          <div className="col-md-3">
            <Div className="form-group ">
             
                <Input
                  className="form-control"
                  type="date"
                  placeholder="Date"
                />
              
            </Div>
          </div>
          <div className="col-md-12">
            <div className="form-group ">
              <Text
                name="message"
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
