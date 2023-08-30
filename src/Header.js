import Eazio from './Eazioimg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navmenu from './Navigation';
import Lanswitcher from './Lang-switcher';
import Navbars from './MobNavbar'
import React from 'react';
// import {Link} from 'react-router-dom';
// import LogoWhite from './image/logo-white.svg';
// import Offcanvas from 'react-bootstrap/Offcanvas';
function Header(){
  
  return (
    
    <>
    <Navbar sticky="top" expand="lg" bg="light" className='px-lg-5'>
      <Container fluid >
          <Eazio/>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
          <Navmenu />
          <div className='right-nav'>
              <Lanswitcher/>
          </div>
        </Navbar.Collapse>
        <Navbars/>
      </Container >
    </Navbar>
    </>
  );
}


export default Header;