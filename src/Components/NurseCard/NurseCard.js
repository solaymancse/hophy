import React from "react";
import { Card, CardGroup,Button} from "react-bootstrap";
import img from '../../images/doc_1.png'
import { Title,Text } from "./DoctorCardElements";
import { withCard } from "../HOC/withCard";


const NurseCard = (props) => {
    const { name,deg } = props;
  return (
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" style={{height:"300px",width:"100%"}} src={img} />
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


export default withCard(NurseCard);