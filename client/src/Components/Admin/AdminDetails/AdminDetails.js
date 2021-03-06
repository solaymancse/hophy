import React, { useState, useEffect } from "react";

import { ModalBox } from "../../Modal/ModalBox";
import { ListTable } from "./../../Dashboard/ListTable/ListTable";
import { Top, Left, Button,Div } from "./AdminDetailsElement";
import axios from "axios";

axios.defaults.withCredentials = true;

export const AdminDetails = () => {
  const [admin, setAdmin] = useState([]);

  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };

  const closeModal = () => {
    SetIsOpen(false);
  };

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/getalladmins", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };

  const url = "http://localhost:5000/api/adminSignup";

  useEffect(() => {
    sendRequest().then((data) => setAdmin(data));
  });
  return (
    <>
      <Top>
        <Left>
          <p>Admin List</p>
        </Left>
        <Button onClick={openModal}>+</Button>
      </Top>
      <Div>

      <ListTable data={admin} />
      <ModalBox
        modalIsOpen={modalIsOpen}
        formTitle="Add Admin"
        url={url}
        closeModal={closeModal}
        />
        </Div>
    </>
  );
};
