import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
export const PostTable = ({ data }) => {
  const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Short Title</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <Img src={row.postImage} align="left" alt="" />

                <TableCell align="left">{row.desc}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div></div>
    </div>
  );
};
