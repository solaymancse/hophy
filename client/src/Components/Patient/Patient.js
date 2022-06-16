import React,{ useState,useEffect} from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios';
import { PaginationPage } from './../Pagination/PaginationPage';
axios.defaults.withCredentials = true;

export const Patient = () => {
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const sendRequest = async ()=> {
    const res = await axios.get("http://localhost:5000/api/getallpatients",{
      withCredentials: true
    })
    .catch((err)=> console.log(err))

    const data = await res.data;
    setLoading(true);
    return data;

  }
  useEffect(()=> {
    sendRequest()
    .then((data)=> 

      setPatient(data),
      setLoading(false),


     
      );

  },[]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = patient.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">NID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPost.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">
                  <cellWarapper>
                 {row.email}
                  </cellWarapper>
                </TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.engagedDate}</TableCell>
                <TableCell align="left">{row.nid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <PaginationPage postPerPage={postPerPage} totalPosts={patient.length} paginate={paginate}/>
    </div>
  )
}
