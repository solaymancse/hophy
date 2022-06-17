import React,{useState} from "react";

import Modal from "react-modal";
import { Form,Top } from './ModalElements'
import { GrFormClose } from 'react-icons/gr';
import axios from 'axios';

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

export const ModalBox = ({ modalIsOpen, closeModal, formTitle, url }) => {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    number:'',
    title:'',
    address:'',
    nid:''

  });
  const { name,email,password,number,title,address,nid } = user;
  const handleChange = (e)=> {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const sendRequest = async () => {
    const res = await axios.post(`"http:://localhost:5000/api/${url}"`, {
        name,
        email,
        password,
        number,
        title, 
        address,
        nid
    })
    .catch((err)=> console.log(err));

    const data = await res.data;

    return data;

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then((data)=> setUser(data));

  }

 
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        <Top><h2>{formTitle}</h2>
        <button onClick={closeModal}><GrFormClose/></button></Top>

        <Form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email"  onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password"  onChange={handleChange}/>
          <input type="number" name="phone" placeholder="Phone"  onChange={handleChange}/>
          <input type="text" name="title" placeholder="Title"  onChange={handleChange}/>
          <input type="text" name="address" placeholder="Address"  onChange={handleChange}/>
          <input type="number" name="nid" placeholder="NID Number"  onChange={handleChange}/>
       
          <input type="submit" />
        </Form>
      </Modal>
    </div>
  );
};
