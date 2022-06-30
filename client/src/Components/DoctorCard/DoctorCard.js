import React from "react";
import { Card, CardGroup} from "react-bootstrap";

import { Title,Text,Button,Img } from "./DoctorCardElements";


export const DoctorCard = (props) => {
    const { name,deg,img } = props;
  return (
    <div>
      <CardGroup>
        <Card>
          <Img variant="top"  src={img} />
          <Card.Body>
            <Title>{name}</Title>
            <Text>{deg}</Text>
          </Card.Body>
          
            <Button to="/viewprofile">VIEW PROFILE</Button>
         
        </Card>
      </CardGroup>
    </div>
  );
};
