import React from "react";
import {
  Wrapper,
  AppointmentForm,
  FormHead,
  SecTitle,
  P,
  H2,
} from "./BookAppointmentElements";
import { Container } from "./../Container/ContainerElements";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Span } from "../FeatureSection/FeatureSectionElements";

export const BookAppointment = () => {
  return (
    <Wrapper>
      <Container>
        <AppointmentForm>
          <div className="row">
            <div className="col-12">
              <FormHead>
                <SecTitle>
                  <P>WE ALWAY READY HELPS YOU</P>
                  <H2>
                    <Span>Book An</Span> Appointment
                  </H2>
                </SecTitle>
                <Form method="post">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                </Form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <Button className="btn btn-danger" type="submit">
                                Make An Appointment

                            </Button>

                        </div>

                    </div>

                </div>
              </FormHead>
            </div>
          </div>
        </AppointmentForm>
      </Container>
    </Wrapper>
  );
};
