import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Wrapper,
  FormHead,
  SecTitle,
  Appointment,
  P,
  H2,
  Button,
} from "./BookAppointmentElements";


import { Span } from "../FeatureSection/FeatureSectionElements";
import { AppointmentForm } from "./../AppointmentForm/AppointmentForm";


export const BookAppointment = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>

        <Appointment>
          <div className="row">
            <div className="col-12">
              <FormHead>
                <SecTitle>
                  <P>WE ALWAY READY HELPS YOU</P>
                  <H2 data-aos="fade-up">
                    <Span>Book An</Span> Appointment
                  </H2>
                </SecTitle>
                {<AppointmentForm />}
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
     
    </Wrapper>
  );
};
