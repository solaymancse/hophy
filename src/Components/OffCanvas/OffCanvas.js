import React from "react";
import { Accordion } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { Div,P } from "./OffCanvasElements";


export const OffCanvas = () => {
  return (
    <div>
        <Div>
        <MdLocationOn />
             <P>Chattogram Software Technology Park, 4100, Chittagong</P>
        </Div>
      <Accordion flush className="mb-5">
  <Accordion.Item eventKey="0">
    <Accordion.Header >HOME</Accordion.Header>
    <Accordion.Body>
      Home1
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Services</Accordion.Header>
    <Accordion.Body>
      Services<br/>Services Details
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Blog</Accordion.Header>
    <Accordion.Body>
        Blog<br/>Blog Details
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>About</Accordion.Header>
    <Accordion.Header>Contact</Accordion.Header>
  </Accordion.Item>
</Accordion>
    </div>
  );
};
