import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import AddButton from '../AddButton';

const Footer = () => {
  return (
    <>
    {/*<Navbar fixed="bottom" expand="md" variant="dark" bg="success">*/}

    {/*</Navbar>*/}
  <div className="navbar-fixed-bottom row-fluid">
    <div className="navbar-inner">
      <div className="container">
        MASK
        <AddButton/>
      </div>
    </div>
  </div>
    </>

  );
};

export default Footer;
