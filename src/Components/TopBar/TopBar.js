import React from 'react';
import { Container } from '../Container/ContainerElements';
import brand from '../../images/brand.png'

export const TopBar = () => {
  return <div>
      <Container>
          <div>
              <div>
                  <img src={brand} alt="hophy"/>
              </div>
              <div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>

      </Container>
  </div>;
};
