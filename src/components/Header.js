import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {  Nav, Navbar, Container, NavDropdown  } from 'react-bootstrap';
import logo from '../logo_wide.png';

const Header = () => {

  return (
        <Navbar className="mainNavBar" expand="lg">
        <Container>
          <Navbar.Brand 
            href="/">
              <img 
              className="logoImage"
                src={logo} 
                style={{width: "70px"}}>
                  </img>
                  
                      </Navbar.Brand>
          <Navbar.Toggle 
          style={{color: "#fff"}}
          aria-controls="basic-navbar-nav" 
          />
          <Navbar.Collapse 
          id="basic-navbar-nav"
          style={{color: "#fff"}}
          >
            <Nav className="me-auto"
              style={{color: "#fff"}}>
              <Nav.Link 
                style={{color: "#fff"}} href="/home">Home</Nav.Link>
              <Nav.Link   style={{color: "#fff"}} href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link   style={{color: "#fff"}} href="/testcentre">Test Centre</Nav.Link>
              <Nav.Link   style={{color: "#fff"}}href="/creatornetwork">Creators</Nav.Link>
              <Nav.Link   style={{color: "#fff"}}href="/login">Login</Nav.Link>
            </Nav>
            <Navbar.Text
              style={{color: "#fff"}}>
        Signed in as: <a href="#login"
          style={{color: "#fff"}}>Jamie Best</a>
      </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Header;
