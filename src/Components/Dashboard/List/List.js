import React from "react";
import { DataTable } from "../DataTable/DataTable";

import { Topbar } from "../Topbar/Topbar";
import { DashSideBar } from "./../DashSideBar/DashSideBar";
import { ListTable, ListContainer,Div } from "./ListElements";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const List = () => {
  return (
    <ListTable>
      <DashSideBar />
      <ListContainer>
        <Topbar />
        <Div>  <Link to='/management/new'><Button>Add New</Button></Link></Div>
        <DataTable/>
      </ListContainer>
    </ListTable>
  );
};
