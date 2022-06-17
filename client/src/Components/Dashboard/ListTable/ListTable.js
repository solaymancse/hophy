import React from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios';
axios.defaults.withCredentials = true;

export const ListTable = ({ data }) => {
    // const [management, setManagement] = useState([]);

    // const sendRequest = async ()=> {
    //   const res = await axios.get("http://localhost:5000/api/getallmanagements",{
    //     withCredentials: true
    //   })
    //   .catch((err)=> console.log(err))

    //   const data = await res.data;
      
    //   return data;

    // }
    // useEffect(()=> {
    //   sendRequest().then((data)=> setManagement(data));

    // },[]);
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
            {data.map((row) => (
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
    </div>
  )
}
