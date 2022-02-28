import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "./../Navbar/Navbar";
import { FooterBottom } from './../FooterBottom/FooterBottom';
import { Wrapper } from './TermsAndConditionElements';

export const TermsAndCondition = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
       <h4>Terms and Conditions:</h4> 
       <p style={{textAlign:'justify'}}>
       1. One person can book only one appointment on the same day with the same mobile number.<br/>
        2. Appointment timings are subject to the doctor’s availability, in case of cancelation, we will reschedule
        the appointment on the next available time slot. <br/>
        3. Patients can place requests to reschedule or appointment but in order to do that they must
        let us know at least 3 hours before the scheduled time. No extra charges will occur for that. <br/>
        4. Patient must write their mobile number in the
        reference section while making the payment using bKash. Any payment
        without a valid reference will not be accepted. <br/>
        5. We will confirm the appointment within 24 hours after the payment verification. <br/>
        6. Patient must download and install the “ZOOM” application from Google Play Store or Apple Store prior to his or her visitation. <br/>
        7. Hophycare holds the right to decline service to anyone for a valid reason at any time.
       </p>
      </Wrapper>
      <Footer/>
      <FooterBottom/>
    </div>
  );
};
