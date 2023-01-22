import React from 'react'
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavItem, NavbarBrand, Container} from 'reactstrap';

const Heading = () => {
  return (
    <Navbar color='dark' dark>
      <Container className='d-flex'>
        <NavbarBrand className='ms-5' href='/'>My Item</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className='btn btn-success ms-5'>Add User</Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Heading