import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const SignUpForm = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });

  const { name, phone } = user;
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <Form method="post" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
