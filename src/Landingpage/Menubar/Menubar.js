

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../../Asset/Logo Tagline-02 (1).png";
import "./Menubar.css";

function Menubar() {
  const [expanded, setExpanded] = useState(false); // State to control the navbar expansion
  const handleToggle = () => setExpanded(!expanded); // Toggle navbar expansion
  const handleSelect = () => setExpanded(false); // Collapse navbar on menu item click

  return (
    <Navbar expand="lg" className="bg-body-tertiary " expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logsiz" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Add onClick={handleSelect} to each Nav.Link and NavDropdown.Item */}
            <Nav.Link as={Link} to="/" className='navtext px-3' onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutuspage" className='navtext px-3' onClick={handleSelect}>About Us</Nav.Link>
            <NavDropdown title={<span className='px-3 navtext1'>Our Services</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sapb" className='navtext1' onClick={handleSelect}>SAP Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/it" className='navtext1 px-3' onClick={handleSelect} disabled>IT Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing" className='navtext1' onClick={handleSelect} disabled>Digital Marketing Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hr" className='navtext1' onClick={handleSelect}>HR Consultancy</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className='navtext px-3' onClick={handleSelect}>Blog</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/contact" className='contactbutton px-3 rounded-1' onClick={handleSelect}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
