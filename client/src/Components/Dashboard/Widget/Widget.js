import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'

import { Container,Left,Right,Title,Counter,Link,Percentage,Icon } from './WidgetElements'

export const Widget = ({backgroundColor,type}) => {

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
                links:'doctors'
            };
            break;
        case "patients":
            data = {
                title: "Patients",
                isMoney: false,
                link: 'See All Patients',
                links:'patients'
            };
            break;
        case "nurses":
            data = {
                title: "Nurses",
                isMoney: false,
                link: 'See All Patients',
                links:'nurses'
            };
            break;
        case "appointment":
            data = {
                title: "Appointment",
                isMoney: false,
                link: 'See All Appointments',
                links:'appointments'
            };
            break;
        default:
            break;

    }
  return (
    <Container backgroundColor={backgroundColor}>
        <Left>
            <Title>{data.title}</Title>
            <Counter>{data.isMoney && "$" } {amount}+</Counter>
            <Link to={data.links}>{data.link}</Link>
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
