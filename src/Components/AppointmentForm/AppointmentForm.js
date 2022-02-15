import React from 'react'
import { Form} from 'react-bootstrap';
import { Wrapper } from './AppointmentFromElements';


export const AppointmentForm = () => {
  return (
    <Wrapper>
         <Form method="post">
                 <div className='row'>
                     <div className='col-md-3'>
                         <div className='form-group'>
                             <input className='form-control' type="text" placeholder="Enter Your Name"/>

                         </div>
                     </div>
                     <div className='col-md-3'>
                     <div className='form-group'>
                             <input className='form-control' type="email" placeholder="Enter Your Email"/>

                         </div>
                     </div>
                     <div className='col-md-3'>
                     <div className='form-group'>
                             <input className='form-control' type="phone" placeholder="Enter Your Phone Number"/>

                         </div>
                     </div>
                     <div className='col-md-3'>
                     <div className='form-group datepicker-group'>
                             <label for="datepicker" className='form-label'>
                                <input className='form-control' type="date" placeholder="Date"/>
                             </label>

                         </div>
                     </div>
                     <div className='col-md-12'>
                     <div  className='form-group '>
                             <textarea  name='message' rows="7" placeholder="Your Message Here....."></textarea>

                         </div>
                     </div>
                  

                 </div>
                </Form>
    </Wrapper>
  )
}
