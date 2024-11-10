import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fw-bold' href="#home">Portfolio</Navbar.Brand>
          <Nav className='fw-bold'>
            
            <Link style={{textDecoration:'none'}} to={'/'}>          <Nav.Link href="#home">Home</Nav.Link>  </Link>
            <Link style={{textDecoration:'none'}} to={'/projects'}>  <Nav.Link href="#features">Projects</Nav.Link>  </Link>
            <Link style={{textDecoration:'none'}} to={'/contact'}>   <Nav.Link href="#pricing">Contact</Nav.Link>  </Link>          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header