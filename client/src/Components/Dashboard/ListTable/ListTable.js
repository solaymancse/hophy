import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios';
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'

axios.defaults.withCredentials = true;


export const ListTable = ({ data }) => {

   
  
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">NID</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
         
            {data.map((row,index) => (
              <TableRow key={row._id}>
               <TableCell component="th" scope="row">
                 {index+1}
                </TableCell>
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
                <TableCell align="center" style={{color:"blue"}}><AiFillEdit/></TableCell>
                <TableCell align="center" style={{color:"red"}}><AiFillDelete/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
