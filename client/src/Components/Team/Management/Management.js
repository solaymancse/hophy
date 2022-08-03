import React, { useState, useEffect } from "react";

import {
  Top,
  Left,
  Button,
  Div,
} from "./../../Admin/AdminDetails/AdminDetailsElement";
import { ListTable } from "../../Dashboard/ListTable/ListTable";
import { ModalBox } from "./../../Modal/ModalBox";
import {Axios} from '../../../config'


export const Management = () => {
  const [management, setManagement] = useState([]);
  const [modalIsOpen, SetIsOpen] = useState(false);

  const openModal = () => {
    SetIsOpen(true);
  };

  const closeModal = () => {
    SetIsOpen(false);
  };

  const sendRequest = async () => {
    const res = await Axios
      .get("getallmanagements", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setManagement(data));
  }, []);

  return (
    <div>
      <Top>
        <Left>
          <p>Management List</p>
        </Left>
        <Button onClick={openModal}>+</Button>
      </Top>
      <Div>
        <ListTable data={management} />
        <ModalBox
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          url="managementSignup"
          formTitle="Add Management Team"
        />
      </Div>
    </div>
  );
};
