import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md';

import { Topbar } from '../Topbar/Topbar';
import { DashSideBar } from './../DashSideBar/DashSideBar';
import { Container, NewContainer,Top,Bottom,Left,Right,H1,Img} from './NewElements'

export const New = () => {
  return (
    <Container>
      <DashSideBar/>
       <NewContainer>
         <Topbar/>
         <Top>
          <H1>Add New Users</H1>
        </Top>
        <Bottom>
          <Left>
          <Img src='https://restorixhealth.com/wp-content/uploads/2018/08/No-Image.png' alt="/"/>
          </Left>
          <Right>
          <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <MdOutlineFileUpload/>
                </label>
                <input
                  type="file"
                  id="file"
                />
              </div>
              <div>
                <input type="text" placeholder="Full Name"/>

              </div>
              <div>
                <input type="number" placeholder="Phone Number"/>

              </div>
              <div>
                <input type="Address" placeholder="Address"/>

              </div>
              <div>
                <input type="password" placeholder="Password"/>

              </div>
              <div>
                <input type="password" placeholder="Confirm Password"/>

              </div>

            
              <button>Send</button>
            </form>
          </Right>
        </Bottom>
       </NewContainer>
    </Container>
  )
}
