import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Menubar.css";
function Menubar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbox py-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link  className='navtext ms-5'>Home</Nav.Link>
            <Nav.Link href="/" className='navtext px-3'>About</Nav.Link>
            <NavDropdown title={<span className='navtext'>Our Services</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='navtext1'>SAP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2 " className='navtext1 px-3'>
          IT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='navtext1'>Digital Marketing</NavDropdown.Item>
           
              <NavDropdown.Item href="#action/3.4" className='navtext1'>
                HR
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='navtext px-3'>Blogs</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="#link" className='contactbutton px-3 rounded-1'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;