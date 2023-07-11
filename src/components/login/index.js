import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/authSlice';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className='container' style={{marginTop: "30vh"}}>
       <div className='d-flex justify-content-center'>
       <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
        Login
      </Button>
    </Form>
       </div>
    
    </div>
   
  );
};

export default LoginForm;
