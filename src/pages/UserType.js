import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function UserType() {
  const navigate = useNavigate();

  const handleClientClick = () => {
    navigate('/client');
  };

  const handleFreelancerClick = () => {
    navigate('/form');
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <Button onClick={handleClientClick} fullWidth variant="contained">
          Client
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleFreelancerClick} fullWidth variant="contained">
          Freelancer
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserType;
