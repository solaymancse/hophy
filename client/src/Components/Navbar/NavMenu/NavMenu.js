import React,{useState} from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
import { Login } from "../../Login/Login";
import Modal from 'react-modal';
import { SignUp } from "../../SignUp/SignUp";
import { Links,Div,Item, Wrapper,Button } from "./NavMenuElements";

import { AiOutlineSearch } from "react-icons/ai";
// Data Import
import { navMenuData } from "../../../Data";
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const NavMenu = () => {
 const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Nav className="me-auto">
            {navMenuData.map((data, index) => (
              <Item key={index}>
                <Links to={data.link}>{data.title}</Links>
              </Item>
            ))}
          </Nav>
          <Div>
          <Modal
        isOpen={modalIsOpen}
  
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <input/>
      </Modal>
           
            <Button onClick={openModal}> <AiOutlineSearch /></Button>
            <Login />
            <SignUp />
          </Div>
        </Navbar>
      </Wrapper>
    </Container>
  );
};
