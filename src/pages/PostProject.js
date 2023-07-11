import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import '../style/MainStyle.css';

const PostProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
    budget: false,
    deadline: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = { title: false, description: false, budget: false, deadline: false };
    let hasErrors = false;

    // Check for empty fields
    if (!formData.title) {
      formErrors.title = true;
      hasErrors = true;
    }
    if (!formData.description) {
      formErrors.description = true;
      hasErrors = true;
    }
    if (!formData.budget) {
      formErrors.budget = true;
      hasErrors = true;
    }
    if (!formData.deadline) {
      formErrors.deadline = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(formErrors);
    } else {
      console.log(formData);
      // Add logic to save the data here
    }
  };

  return (
    <div className='card-section justify-content-center'>
      <Paper elevation={3} className='mar post_project'>
        <Typography variant="h4" className='mb-5'>Recent Projects</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            size="small"
            value={formData.title}
            onChange={handleChange}
            inputProps={{ maxLength: 255 }}
            error={errors.title}
            sx={{ margin: 1 }}
            helperText={errors.title ? 'Title cannot be empty' : ''}
          />
          <TextField
            name="description"
            placeholder="Description"
            fullWidth
            rows={6}
            multiline
            value={formData.description}
            inputProps={{ maxLength: 255 }}
            onChange={handleChange}
            error={errors.description}
            sx={{
              margin: 1,
            }}
            helperText={errors.description ? 'Description cannot be empty' : ''}
          />
          <TextField
            name="budget"
            label="Budget"
            variant="outlined"
            fullWidth
            size="small"
            type="number"
            value={formData.budget}
            onChange={handleChange}
            InputProps={{
              inputProps: {
                min: 0,
                step: 0.01,
              },
              endAdornment: <span>$</span>,
            }}
            error={errors.budget}
            sx={{ margin: 1 }}
            helperText={errors.budget ? 'Budget cannot be empty' : ''}
          />
          <TextField
            name="deadline"
            label="Deadline"
            variant="outlined"
            fullWidth
            size="small"
            type="datetime-local"
            value={formData.deadline}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={errors.deadline}
            sx={{ margin: 1 }}
            helperText={errors.deadline ? 'Deadline cannot be empty' : ''}
          />
          <Button type="submit" variant="contained" color="primary">
            Post Project
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default PostProject;
