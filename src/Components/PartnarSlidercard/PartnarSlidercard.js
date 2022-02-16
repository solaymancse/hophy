import React from 'react'
import img from '../../images/partnar1.png'
import { Wrapper,Img } from './PartnarSliderCardElements'


export const PartnarSlidercard = () => {
  return (
    <Wrapper>
        <Img src={img} alt='/' />
    </Wrapper>
  )
}
