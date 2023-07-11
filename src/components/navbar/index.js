import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isAuthenticated ? (
            <LinkContainer to="/usertype">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          ) : null}
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <Button variant="outline-primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <LinkContainer to="/">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
