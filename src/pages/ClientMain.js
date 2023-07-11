import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Typography, Paper, Box } from '@mui/material';
import '../style/MainStyle.css';

function ClientMain() {
  return (
    <Box className='card-section' justifyContent="center">
      <Link to='/postproject' className="text-decoration">
        <Paper elevation={3} className='client_main_card mar'>
          <Typography variant="h4">Post Project</Typography>
          <Typography variant="body1">
            Post a new project!
            <AiOutlineArrowRight className='arrow_big' />
          </Typography>
        </Paper>
      </Link>
      <Paper elevation={3} className='client_main_card mar'>
        <Typography variant="h4">Browse Freelancers</Typography>
        <Typography variant="body1">
          Browse all the freelancers available!
          <AiOutlineArrowRight className='arrow_big' />
        </Typography>
      </Paper>
    </Box>
  );
}

export default ClientMain;
