import React from 'react';
import logo from '../assets/images/sewhite2.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

function Header() {
  return (
    <div id='header-page' className='header'>
      <Navbar className="navbar navbar-dark" bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-center"
              alt="SEC Logo"
            />
            Software Engineering Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right">
              <Nav.Link href="#about-page">About Us</Nav.Link>
              <Nav.Link href="#">Events</Nav.Link>
              <Nav.Link href="#team-page">Team</Nav.Link>
              {/* <Nav.Link href="#">FAQs</Nav.Link> */}
              <Nav.Link href="#social-page">Contact Us</Nav.Link>
              {/* <Nav.Link href="#">Become A Member</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header