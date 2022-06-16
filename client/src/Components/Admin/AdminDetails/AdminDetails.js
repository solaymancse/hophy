import React,{ useState } from 'react'

import { BiSearchAlt2 } from 'react-icons/bi';
import { ModalBox } from '../../Modal/ModalBox';
import { ListTable } from './../../Dashboard/ListTable/ListTable';
import { Top,Left,Button } from './AdminDetailsElement';


export const AdminDetails = () => {
  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  }

  const closeModal = () => {
    SetIsOpen(false);
  }
  
  return (
    <>
      <Top>
        <Left>
          <BiSearchAlt2/>
          <input type="search" placeholder="Serach Admin"/>
        </Left>
          <Button onClick={openModal}>Add Admin</Button>
      </Top>
      <ListTable/>
      <ModalBox modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  )
}
