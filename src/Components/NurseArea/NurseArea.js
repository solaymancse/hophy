import React from 'react'
import { P, SecTitle } from '../DoctorsArea/DoctorsAreaElements';
import { Span } from '../FeatureSection/FeatureSectionElements';
import { Wrapper} from './NurseAreaElements';
import { H2 } from './../DoctorsArea/DoctorsAreaElements';


import { NurseSlider } from './../NurseSlider/NurseSlider';

export const NurseArea = () => {
  return (
    <Wrapper>
       <div className="row">
          <div className="col-lg-12">
            <SecTitle data-aos="fade-up">
              <P>MEET OUR NURSES</P>
              <H2>
                <Span>Professional & </Span> Enthusiastic
              </H2>
            </SecTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">{<NurseSlider />}</div>
        </div>
        
   
         
    </Wrapper>
  )
}
