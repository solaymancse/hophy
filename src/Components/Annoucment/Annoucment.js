import React from 'react'

import img from '../../images/brand6.png'
import { Container,Left, Right, Img ,H1,Button,Input } from './AnnoucmentElements'



export const Annoucment = ({closeModal}) => {
   
  
  return (
 <Container>
        <Left>
            <Img src={img} alt="logo"/>
        </Left>
        <Right>
            <H1>The Site is Under Construction !</H1>
            <p>Subscribe for notify</p>
            <Input type="email" placeholder='Email'/> 
            <Button color='#34ace3'>Subscribe</Button>
            <Button color='red' onClick={()=> closeModal(false)}>Close</Button>
        </Right>
    </Container>
  )
}
