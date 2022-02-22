import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { LoginForm } from '../LoginForm/LoginForm';


export const Login = () => {
    const [modalShow, setModalShow] = useState(false);
    function LoginModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login Your Account
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {<LoginForm/>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  return (
    <div>

    <Button  className="mx-3" variant="danger" onClick={() => setModalShow(true)}>
      Login
      </Button>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    

    </div>
  );
}
