import React from 'react'
import img from '../../images/log1.jpg'
import { Container,Top,Bottom,Wrapper,Left,Right } from './CommonLoginPageElements'
export const CommonLoginPage = () => {
  return (
    <Container>
        <Top></Top>
        <Bottom></Bottom>
        <Wrapper>
            <Left>
                <img src={img} alt='' />
            </Left>
            <Right></Right>
        </Wrapper>

    </Container>
  )
}
