import React,{ useState,useEffect} from 'react'

import { Top,Left,Button } from './../../Admin/AdminDetails/AdminDetailsElement';
import { ListTable } from './../../Dashboard/ListTable/ListTable';
import { ModalBox } from './../../Modal/ModalBox';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const ContentTeam = () => {
  const [contentTeam, setContentTeam] = useState([]);
  const [modalIsOpen, SetIsOpen] = useState(false);

  
  const openModal = () => {
    SetIsOpen(true);
  }

  const closeModal = () => {
    SetIsOpen(false);
  }

  const sendRequest = async ()=> {
    const res = await axios.get("http://localhost:5000/api/getallContentTeams",{
      withCredentials: true
    })
    .catch((err)=> console.log(err))

    const data = await res.data;
    
    return data;

  }
  useEffect(()=> {
    sendRequest().then((data)=> setContentTeam(data));

  },[]);
  

  return (
    <div>
       <Top>
        <Left>
          <p>Content Team List</p>
        </Left>
          <Button onClick={openModal}>+</Button>
      </Top>
      <ListTable data={contentTeam}/>
      <ModalBox modalIsOpen={modalIsOpen} closeModal={closeModal} url="http://localhost:5000/api/contentSignup" formTitle="Add Content Team"/>
    </div>
  )
}
