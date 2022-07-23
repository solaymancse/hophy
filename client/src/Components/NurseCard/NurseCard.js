import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Title, Text, Button } from "./../DoctorCard/DoctorCardElements";

export const NurseCard = (props) => {
  const { name, title, img } = props;
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            style={{ height: "300px", width: "100%",objectFit:"cover" }}
            src={img}
          />
          <Card.Body>
            <Title>{name}</Title>
            <Text>{title}</Text>
          </Card.Body>

          <Button to="/">VIEW PROFILE</Button>
        </Card>
      </CardGroup>
    </div>
  );
};
