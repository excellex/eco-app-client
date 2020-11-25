import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="md" variant="dark" bg="success">
      <NavbarBrand>Eco App</NavbarBrand>
    </Navbar>
  );
};

export default Header;
