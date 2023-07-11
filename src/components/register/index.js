import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/authSlice';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  return (
    <div className = "container" style={{marginTop: "30vh"}}>
      <div className='d-flex justify-content-center'>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <div className='form-group' style={{marginTop: "10px"}}>
        <label className='checkbox-inline'>
          <input type='checkbox' required="required" />I accept the <a href='#' >Term of Use</a> &amp; <a href='#'>privacy Policy</a>
        </label>
      </div>

      <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
        Register
      </Button>
    </Form>
      </div>
      
    </div>
    
  );
};

export default RegisterForm;
