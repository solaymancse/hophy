import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { LoginForm } from '../LoginForm/LoginForm';


export const SignUp = () => {
    const [modalShow, setModalShow] = useState(false);
    function SignUpModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             { <LoginForm/>}
            </Modal.Body>
            <Modal.Footer>
              <Button  variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  return (
    <div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
       Sign Up
      </Button>

      <SignUpModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    

    </div>
  );
}
