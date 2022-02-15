import React from 'react'
import { PartnarSlider } from '../PartnarSlider/PartnarSlider';
import { Container } from './../Container/ContainerElements';
import { Wrapper,LogoArea } from './OurPartnarElements';

export const OurPartnar = () => {
  return (
    <Wrapper>
        <Container>
            <div className='row'>
                <LogoArea>
                   { <PartnarSlider/>}
                </LogoArea>

            </div>

        </Container>
    </Wrapper>
  )
}
