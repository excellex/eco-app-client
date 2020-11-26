import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import AddButton from '../AddButton';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <>
    {/*<Navbar fixed="bottom" expand="md" variant="dark" bg="success">*/}

    {/*</Navbar>*/}
  <div className={classes.footer}>
    <div className="navbar-inner">
      <div className="container text-center">
        MASK
        <AddButton/>
      </div>
    </div>
  </div>
    </>

  );
};

export default Footer;
