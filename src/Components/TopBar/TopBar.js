import React from 'react';
import { Container } from '../Container/ContainerElements';
import { Div, Img, Row, Col, H3, H1,Icon} from './TopBarElements';
import brand2 from '../../images/brand3.png'
import { AiOutlineClockCircle, AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
export const TopBar = () => {
  return <div>
      <Container>
          <Div>
              <div>
                 <Img src={brand2}/>
              </div>
              <div>
                  <Row>
                      <Col>
                      <Icon><AiOutlineClockCircle/></Icon>
                      <div><H3>WORKING HOURS</H3>
                      <H1>SAT - FRI : 9.00 - 10.00</H1></div>
                      </Col>
                      <Col>
                      <Icon><AiOutlineMail/></Icon>
                      <div><H3>HOTLINE 24/7</H3>
                      <H1>+0123-45-67-890</H1></div>
                      </Col>
                      <Col>
                      <Icon><BsTelephoneFill/></Icon>
                      <div>
                      <H3>EMAIL US</H3>
                      <H1>HOPHY@GAMIL.COM</H1>
                      </div>
                      </Col>
                  </Row>
                  
              </div>
          </Div>

      </Container>
  </div>;
};
