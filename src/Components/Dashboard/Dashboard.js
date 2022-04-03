import React from 'react'

import { Wrapper,Container,WidgetContainer,ListContainer,ListTitle } from './DashboardElements';
import { DashSideBar } from './DashSideBar/DashSideBar';
import { Header } from './Header/Header';
import { Widget } from './Widget/Widget';
import { ListTable } from './ListTable/ListTable';

export const Dashboard = () => {
  return (
    <Wrapper>
      <DashSideBar />
      <Container>
      <Header/>
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
  )
}
