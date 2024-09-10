// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./Menubar.css";
// function Menubar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary navbox py-3">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link className='navtext ms-5'>Home</Nav.Link>
//             <Nav.Link href="/" className='navtext px-3'>About</Nav.Link>
//             <NavDropdown title={<span className='navtext'>Our Services</span>} id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1" className='navtext1'>HR</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2 " className='navtext1 px-3'>
//           IT
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3" className='navtext1'>Digital Marketing</NavDropdown.Item>
           
//               <NavDropdown.Item href="#action/3.4" className='navtext1'>
//              SAP
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link" className='navtext px-3'>Blogs</Nav.Link>
//           </Nav>
//           <Nav className='ms-auto'>
//           <Nav.Link href="#link" className='contactbutton px-3 rounded-1'>Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Menubar;




// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import "./Menubar.css";

// function Menubar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary navbox py-3">
//       <Container>
//         <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand> {/* Using Link for brand */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/" className='navtext'>Home</Nav.Link>
//             <Nav.Link as={Link} to="/aboutus" className='navtext px-3'>About</Nav.Link>
//             <NavDropdown title={<span className='navtext'>Our Services</span>} id="basic-nav-dropdown">
//               {/* Update the NavDropdown items to use the Link component */}
//               <NavDropdown.Item as={Link} to="/hr" className='navtext1'>HR</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2" className='navtext1 px-3'>IT</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3" className='navtext1'>Digital Marketing</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4" className='navtext1'>SAP</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link" className='navtext px-3'>Blogs</Nav.Link>
//           </Nav>
//           <Nav className='ms-auto'>
//             <Nav.Link href="#link" className='contactbutton px-3 rounded-1'>Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Menubar;



import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./Menubar.css";

function Menubar() {
  const [expanded, setExpanded] = useState(false); // State to control the navbar expansion
  const handleToggle = () => setExpanded(!expanded); // Toggle navbar expansion
  const handleSelect = () => setExpanded(false); // Collapse navbar on menu item click

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbox py-3" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" className='navtext px-3'>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className='navtext px-3'>About Us</Nav.Link>
            <NavDropdown title={<span className='navtext px-3'>Our Services</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/hr" className='navtext1'>HR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/it" className='navtext1 px-3' disabled>IT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing" className='navtext1' disabled>Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sap" className='navtext1' disabled>SAP</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog" className='navtext px-3'>Blogs</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to="/contact" className='contactbutton px-3 rounded-1'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
