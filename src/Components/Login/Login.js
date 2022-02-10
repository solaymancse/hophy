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
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  return (
    <div>

      <Button className="btn btn-danger me-3" onClick={() => setModalShow(true)}>
       Login
      </Button>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    

    </div>
  );
}
