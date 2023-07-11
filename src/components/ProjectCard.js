import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card mb-4">
      <Link to={`/project/${project.id}`} className="text-decoration">
        <CardContent>
          <Typography variant="h5" component="div" sx={{ borderBottom: 1, mb: 2 }}>
            {project.title}
          </Typography >
          <div className="d-flex">
            <PersonIcon className="project-card-icon" />
            <Typography variant="subtitle2" className="mb-2 text-muted">
              {project.client_name}
            </Typography>
          </div>
          <Typography variant="body1" className="mb-3 project-card-description">
            {project.description}
          </Typography>
          <div>
            <div className="d-flex">
              <AttachMoneyIcon className="project-card-icon" />
              <div>{project.budget}</div>
            </div>
            <div className="d-flex">
              <ScheduleIcon className="project-card-icon" />
              <div>{new Date(project.deadline).toLocaleDateString()}</div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectCard;
