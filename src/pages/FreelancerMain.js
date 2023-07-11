import React from 'react';
import '../style/MainStyle.css';
import { data } from '../temp/Data';
import ProjectCard from '../components/ProjectCard';
import { Container, Grid } from '@mui/material';

const FreelancerMain = () => {
  console.log(data);

  return (
    <Container>
      <h1 className="my-4">Recent Projects</h1>
      <Grid container spacing={2}>
        {data.map((project) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FreelancerMain;
