import React,{useState} from 'react'

import 'react-calendar/dist/Calendar.css';

import {Wrapper,Left,Right,CalenderDiv} from './AppointmentElement'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'sl', label: 'Serial No', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(sl,name,phone,date,action) {
  return { sl,name, phone, date, action };
}


export const Appointments = () => {
    const [value, onChange] = useState(new Date());
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const rows = [
    createData('1','India', 'IN', 1324171354,'Pending'),
    createData('2','China', 'CN', 1403500365,'Pending'),
    createData('3','Italy', 'IT', 60483973,'Pending'),
    createData('4','United States', 'US', 327167434,'Pending'),
    createData('5','Canada', 'CA', 37602103,'Pending'),
    createData('6','Australia', 'AU', 25475400,'Pending'),
    createData('7','Germany', 'DE', 83019200,'Pending'),
    createData('8','Ireland', 'IE', 4857000,'Pending'),
    createData('9','Mexico', 'MX', 126577691,'Pending'),
    createData('10','Japan', 'JP', 126317000,'Pending'),
    createData('11','France', 'FR', 67022000,'Pending'),

  ];
  return (
    <Wrapper>
        <Left>
        <CalenderDiv onChange={onChange} value={value} />
        </Left>
        <Right>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </Right>
  
    </Wrapper>
  )
}
