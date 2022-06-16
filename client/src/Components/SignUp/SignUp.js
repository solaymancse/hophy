import React, { useState } from "react";

import { Button } from "./../Login/LoginElement";
import { FaUnlock } from "react-icons/fa";
import { SignUpForm } from "./../SignUpForm/SignUpForm";
import Modal from "react-modal";
Modal.setAppElement("#root");

// Modal Style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "0",
    bottom: "auto",
    overflowX: "hidden",
    transform: "translate(-50%, -50%)",
    transition: ".5s",
  },
};

export const SignUp = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>
        <FaUnlock />
        Sign Up
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SignUpForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};
