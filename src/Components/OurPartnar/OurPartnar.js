import React from 'react'
import { PartnarSlider } from '../PartnarSlider/PartnarSlider';
import { Wrapper,LogoArea } from './OurPartnarElements';

export const OurPartnar = () => {
  return (
    <Wrapper>
 
            <div className='row'>
                <LogoArea>
                   { <PartnarSlider/>}
                </LogoArea>

            </div>

     
    </Wrapper>
  )
}
