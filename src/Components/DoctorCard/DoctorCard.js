import React from "react";
import { Card, CardGroup,Button} from "react-bootstrap";
import img from '../../images/doc1.jpg'
import { Title,Text } from "./DoctorCardElements";


export const DoctorCard = (props) => {
    const { name,deg } = props;
  return (
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Title>{name}</Title>
            <Text>{deg}</Text>
          </Card.Body>
          
            <Button style={{marginTop:"30px",backgroundColor: '#34ACE1',outLine:'none',border:'none'}}href="/">VIEW PROFILE</Button>
         
        </Card>
      </CardGroup>
    </div>
  );
};