import React from 'react'
import { MdOutlineCopyright } from 'react-icons/md';

import { Wrapper,P } from './FooterBottomElements';
import { Span } from './../FeatureSection/FeatureSectionElements';


export const FooterBottom = () => {
  return (
    <Wrapper>
  
            <div className='row text-center'>
                <div className='col-sm-12'>
                    <div className='widget-copyright'>
                        <P><MdOutlineCopyright/> 2022 <Span>HOPHY</Span> - Health care</P>

                    </div>

                </div>

            </div>


    </Wrapper>
  )
}