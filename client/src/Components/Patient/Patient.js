import React, { useState, useEffect } from "react";

import {Axios} from '../../../src/config'
import { PaginationPage } from "./../Pagination/PaginationPage";
import { ListTable } from './../Dashboard/ListTable/ListTable';
import styled from 'styled-components';


export const Patient = () => {
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const sendRequest = async () => {
    const res = await Axios
      .get("getallpatients", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    setLoading(true);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setPatient(data), setLoading(false));
  }, []);
  // Pagination State
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = patient.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search State
  const Wrapper = styled.div`

`
  const Div = styled.div`
  margin-top: -50px;

`
  const H1 = styled.h1`
  font-size: 16px;
  background-color: #01D8DA;
  width: 100%;
  color: #fff;
  height: 15vh;
  font-weight: bold;
  padding: 30px 0 0 20px;

`

  return (
    <Wrapper>
      <H1>All Patient List</H1>
      <Div>

      <ListTable data={currentPost}/>

      <PaginationPage
      loading={loading}
      postPerPage={postPerPage}
      totalPosts={patient.length}
      paginate={paginate}
      setPostPerPage={setPostPerPage}
      />
      </Div>
    </Wrapper>
  );
};
