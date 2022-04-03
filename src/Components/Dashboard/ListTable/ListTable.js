import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

export const ListTable = () => {
    const rows = [
        {
          id: 1143155,
         
        
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
         
        
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
         
        
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
         
         
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
      
        
          customer: "Salah Uddin",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];
  return (
    <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Transaction</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.customer}</TableCell>
                <TableCell align="left">
                  <cellWarapper>
                 
                  </cellWarapper>
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
