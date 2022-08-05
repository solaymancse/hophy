import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from '@mui/material';
import {Axios} from '../../../httpServices/requests';
import {

    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@material-ui/core";
export const NewEvents = () => {
const [events,setEvents] = useState([]);
const [file,setFile] = useState(null);

const {title,details,location,date,time} = events;
const handleChange = (e) => {
    setEvents({...events, [e.target.name]:e.target.value});
}

const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('eventImage', file);
        formData.append('title', title);
        formData.append('details', details);
        formData.append('location', location);
        formData.append('date', date);
        formData.append('time', time);

        Axios.post("addevent", formData)
        .then((res)=> console.log(res.data))
        .catch((err) => {
            console.error(err);
          });
console.log(title,details,location,date,time,file);
    }
  return (
    <div style={{marginTop:"30px"}}>
        <Form onSubmit={handleSubmit}>
            <input type='text' placeholder="Title" name="title" onChange={handleChange} className="form-control mb-2"/>
            <input type='file' placeholder="Event Photo" name="eventImage"onChange={handleFileChange} className="form-control mb-2"/>
            <input type='text' placeholder="Details" name="details" onChange={handleChange} className="form-control mb-2"/>
            <input type='text' placeholder="Location" name="location" onChange={handleChange} className="form-control mb-2"/>
            <input type='text' placeholder="Date" name="date" onChange={handleChange} className="form-control mb-2"/>
            <input type='text' placeholder="Time" name="time" onChange={handleChange} className="form-control mb-2"/>
            <Button variant="contained" type="submit">Create Event</Button>
        </Form>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
