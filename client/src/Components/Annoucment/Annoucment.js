import React from 'react'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import img from '../../images/event1.jpg'

// import { Container,Left, Img ,Button } from './AnnoucmentElements'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,

};

export const Annoucment = ({closeModal,handleOpen,handleClose}) => {
  
  
  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={handleOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={handleOpen}>
          <Box sx={style}>
            <img style={{width:'600px',height:"350px"}} src={img} alt="event"/>
          </Box>
        </Fade>
      </Modal>
  )
}
