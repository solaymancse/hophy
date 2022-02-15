import React from "react";
import {
  Wrapper,
  FormHead,
  SecTitle,
  Appointment,
  P,
  H2,
  Button
} from "./BookAppointmentElements";
import { Container } from "./../Container/ContainerElements";

import { Span } from "../FeatureSection/FeatureSectionElements";
import { AppointmentForm } from './../AppointmentForm/AppointmentForm';

export const BookAppointment = () => {
  return (
    <Wrapper>
      <Container>
        <Appointment>
          <div className="row">
            <div className="col-12">
              <FormHead>
                <SecTitle>
                  <P>WE ALWAY READY HELPS YOU</P>
                  <H2>
                    <Span>Book An</Span> Appointment
                  </H2>
                </SecTitle>
                {<AppointmentForm/>}
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <Button className="btn" type="submit">
                                Make An Appointment

                            </Button>

                        </div>

                    </div>

                </div>
              </FormHead>
            </div>
          </div>
        </Appointment>
      </Container>
    </Wrapper>
  );
};
