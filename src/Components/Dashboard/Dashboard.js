import React from "react";
import { DashSideBar } from "./DashSideBar/DashSideBar";
import { Wrapper,Container,WidgetContainer,ListContainer,ListTitle } from './DashboardElements';
import { Topbar } from './Topbar/Topbar';
import { Widget } from "./Widget/Widget";
import { ListTable } from './Table/ListTable';


export const Dashboard = () => {
  return (
    <Wrapper>
      <DashSideBar />
      <Container>
      <Topbar/>
      <WidgetContainer>
        <Widget type="doctors"/>
        <Widget type="patients"/>
        <Widget type="nurses"/>
        <Widget type="appointment"/>
      </WidgetContainer>
      <ListContainer>
        <ListTitle>All Appointment's</ListTitle>
        <ListTable/>
      </ListContainer>
      </Container>

    </Wrapper>
  );
};
