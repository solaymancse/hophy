import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'

import { Container,Left,Right,Title,Counter,Link,Percentage,Icon } from './WidgetELements'

export const Widget = ({type}) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;
    switch(type){
        case "doctors":
            data = {
                title: "Doctors",
                isMoney: false,
                link: 'See All Doctors',
            };
            break;
        case "patients":
            data = {
                title: "Patients",
                isMoney: false,
                link: 'See All Patients',
            };
            break;
        case "nurses":
            data = {
                title: "Nurses",
                isMoney: false,
                link: 'See All Patients',
            };
            break;
        case "appointment":
            data = {
                title: "Appointment",
                isMoney: false,
                link: 'See All Appointments',
            };
            break;
        default:
            break;

    }
  return (
    <Container>
        <Left>
            <Title>{data.title}</Title>
            <Counter>{data.isMoney && "$" } {amount}</Counter>
            <Link>{data.link}</Link>
        </Left>
        <Right>
            <Percentage>
                <IoMdArrowDropup/>
                {diff}%
            </Percentage>
           <Icon> <BiUser/></Icon>
        </Right>

    </Container>
  )
}
