import React, { useState } from "react";


import { LoginForm } from "../LoginForm/LoginForm";
import { Button } from "./LoginElement";
import { HiLockClosed } from "react-icons/hi";
import  Modal from 'react-modal';
Modal.setAppElement('#root');

// Modal Style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '0',
    bottom: 'auto',
    overflowX:"hidden",
    transform: 'translate(-50%, -50%)',
    transition:".5s"
  },
};
export const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  
  return (
    <div>
      <Button
        onClick={openModal}
      >
      <HiLockClosed/>
        Login
      </Button>

      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
     
      >   
      <LoginForm closeModal={closeModal}/>
      </Modal>
    </div>
  );
};
