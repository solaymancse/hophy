import React, { useState, useEffect } from "react";

import {
  Top,
  Left,
  Button,
} from "./../../Admin/AdminDetails/AdminDetailsElement";
import { ModalBox } from "./../../Modal/ModalBox";
import axios from "axios";
import { TeamCard } from './../TeamCard/TeamCard';
import styled from 'styled-components';
axios.defaults.withCredentials = true;

export const ContentTeam = () => {
  const [contentTeam, setContentTeam] = useState([]);
  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };

  const closeModal = () => {
    SetIsOpen(false);
  };

  const sendRequest = async () => {
    
    const res = await axios
      .get("http://localhost:5000/api/getallContentTeams", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setContentTeam(data));
  }, []);

  const Div = styled.div`
    display: flex;
  `
  return (
    <div>
      <Top>
        <Left>
          <p>Content Team List</p>
        </Left>
        <Button onClick={openModal}>+</Button>
      </Top>
      <Div>
        {/* <ListTable data={contentTeam} /> */}
        <TeamCard data={contentTeam}/>
        <ModalBox
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          url="http://localhost:5000/api/contentSignup"
          formTitle="Add Content Team"
        />
      </Div>
    </div>
  );
};
