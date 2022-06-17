import React, { useState, useEffect } from "react";

import axios from "axios";
import { PaginationPage } from "./../Pagination/PaginationPage";
import { ListTable } from './../Dashboard/ListTable/ListTable';
axios.defaults.withCredentials = true;

export const Patient = () => {
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/getallpatients", {
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
 

  return (
    <div>
      <ListTable data={currentPost}/>

      <PaginationPage
      loading={loading}
        postPerPage={postPerPage}
        totalPosts={patient.length}
        paginate={paginate}
        setPostPerPage={setPostPerPage}
      />
    </div>
  );
};
