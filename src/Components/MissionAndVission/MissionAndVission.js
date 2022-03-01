import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Wrapper } from './../ServicesList/ServicesListElements';



export const MissionAndVission = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="col-lg-12 mb-5">
          <h1 className="mb-5" data-aos="fade-up">Mission</h1>
          <h4>QUALITY</h4>
          Striving for uncompromising excellence in service delivery and setting
          of global benchmarks inpatient care.
          <h4>ACCESSIBILITY</h4>
          Making quality healthcare services available and accessible to all
          through cost-effective and innovative processes.
          <h4>TECHNOLOGY-DRIVEN</h4>
          Skillful and optimum leveraging of technology that leads to real-time
          and effective service outcomes.
          <h4>TRANSPARENCY</h4>
          Ensuring openness in service and all its related parameters in order
          to win the trust of the care seeker as well as the provider.
          <h4>CONTINUITY OF CARE</h4>
          Providing a continuity of care from tertiary and secondary hospitals
          to the community through a seamless integrated services network.
          <h4>EMPLOYEE FIRST</h4>
          Ensuring employees are valued and respected, motivates them to
          identify with the organization and strive to achieve its core purpose.
        </div>
        <div className="col-lg-12">
          <h1 ata-aos="fade-up">Vission</h1>
          <p>
            To be trusted and globally recognized for excellent in-home
            healthcare. We want to make better healthcare for our present and
            future generations.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};
