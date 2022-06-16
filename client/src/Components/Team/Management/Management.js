import React,{ useState } from 'react';

import { Top,Left ,Button} from './../../Admin/AdminDetails/AdminDetailsElement';
import { BiSearchAlt2 } from 'react-icons/bi';
import { ListTable } from '../../Dashboard/ListTable/ListTable';
import { ModalBox } from './../../Modal/ModalBox';

export const Management = () => {
  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  }

  const closeModal = () => {
    SetIsOpen(false);
  }
  return (
    <div>
       <Top>
        <Left>
          <BiSearchAlt2/>
          <input type="search" placeholder="Serach Admin"/>
        </Left>
          <Button onClick={openModal}>Add Management</Button>
      </Top>
      <ListTable/>
      <ModalBox modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  )
}
