import React,{ useState,useEffect } from 'react'

import { BiSearchAlt2 } from 'react-icons/bi';
import { ModalBox } from '../../Modal/ModalBox';
import { ListTable } from './../../Dashboard/ListTable/ListTable';
import { Top,Left,Button } from './AdminDetailsElement';
import axios from 'axios';
axios.defaults.withCredentials=true;

export const AdminDetails = () => {
  const [admin, setAdmin] = useState([]);
  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  }

  const closeModal = () => {
    SetIsOpen(false);
  }
  
  const sendRequest = async () => {

    const res = await axios.get("http://localhost:5000/api/getalladmins",{
      withCredentials: true
    })
    .catch((err)=> console.log(err));

    const data = await res.data;

    return data;
  }

  useEffect(()=> {
    sendRequest().then((data)=> setAdmin(data));
  });
  return (
    <>
      <Top>
        <Left>
          <BiSearchAlt2/>
          <input type="search" placeholder="Serach Admin"/>
        </Left>
          <Button onClick={openModal}>Add Admin</Button>
      </Top>
      <ListTable data={admin}/>
      <ModalBox modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  )
}
