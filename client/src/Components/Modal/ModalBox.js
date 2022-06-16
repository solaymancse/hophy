import React from "react";
import Modal from "react-modal";


Modal.setAppElement("#root");
// modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalBox = ({ modalIsOpen, closeModal }) => {
 
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>

        <form >
          <input type="text" name="name" placeholder="Full Name" />
       
          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};
