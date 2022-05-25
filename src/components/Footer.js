import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';


const Footer = () => {

  

  return (
    <Navbar 
      id="footer" 
      fixed="bottom" 
      className="justify-content-center flex-grow-1">

    <Nav.Item className="mb-2">
    Brought to you by your friendly neighbourhood levels team
    </Nav.Item>

    </Navbar>



  )
}

export default Footer;
