import React from "react";
import { Card, CardGroup,Button} from "react-bootstrap";
import { Title,Text } from './../DoctorCard/DoctorCardElements';




export const NurseCard = (props) => {
    const { name,title, img } = props;
  return (
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" style={{height:"250px",width:"100%"}} src={img} />
          <Card.Body>
            <Title>{name}</Title>
            <Text>{title}</Text>
          </Card.Body>
          
            <Button style={{marginTop:"30px",backgroundColor: '#34ACE1',outLine:'none',border:'none'}}href="/">VIEW PROFILE</Button>
         
        </Card>
      </CardGroup>
    </div>
  );
};

