import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoWhite from './image/logo-white.svg';
import ScrollToTop from "react-scroll-to-top";
export default function Navbars(){
 const [isMenuClosed, setMenuClosed] = useState(true);

    return(
        <div className="nav-container d-block d-lg-none d-md-block d-sm-block px-lg-5" >
        <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}><i className="fa fa-bars toggle"></i></div>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
            <div >
                <Offcanvas.Header className='d-flex'>
                    <img src={LogoWhite} className='overlay-logo' alt='eazio-logo'/>
                    <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                </Offcanvas.Header>
                <div className="overlay-menu-wrapper">
                    <div className="overlay-menu">
                        <Link className=' overlay-menu-item' to="./" onClick={() => setMenuClosed(!isMenuClosed)} ><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Home</span>} /></Link>
                        <Link className=' overlay-menu-item' to="./about " onClick={() => setMenuClosed(!isMenuClosed)} ><ScrollToTop top="0" smooth component={<span className='top-header-menu' >About</span>} /></Link>
                        <Link className=' overlay-menu-item'  to="./pricing" onClick={() => setMenuClosed(!isMenuClosed)}><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Pricing</span>} /></Link>
                        <a className="overlay-menu-item " href="eazio.com/blog"><span className='top-header-menu blog' >Blog</span></a>
                        {/* <Link className='' to="./beta/features">Features</Link>*/}
                        <Link className=' overlay-menu-item' to="./contact-us" onClick={() => setMenuClosed(!isMenuClosed)}><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Contact</span>} /></Link>
                        <Link className='overlay-menu-item mb-3' to="https://eazio.com/auth/login" onClick={() => setMenuClosed(!isMenuClosed)} ><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Login</span>} /></Link>
                        <Link className='mob-btn btn sm demo-btn' to="https://eazio.com/auth/register" onClick={() => setMenuClosed(!isMenuClosed)}><ScrollToTop top="0" smooth component={<span className='' >Sign up now</span>} /></Link>
                    </div>             
                </div>               
            </div>           
        </div>
    </div>
    )
}


















// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Navmenu from './Navigation';
// import Lanswitcher from './Lang-switcher';
// import Eazio from './Eazioimg';

// function Navbars() {
   
//     return (
//         <>
//             {['sm',].map((expand) => (
//                 <Navbar sticky="top"  key={expand} expand={expand} className="mb-3 px-lg-5">
//                     <Container fluid>
//                         <Navbar.Brand href="#"><Eazio /></Navbar.Brand>
//                         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//                         <Navbar.Offcanvas
//                             id={`offcanvasNavbar-expand-${expand}`}
//                             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                             placement="end"
//                         >
//                             <Offcanvas.Header closeButton>
//                                 <Eazio />
//                             </Offcanvas.Header>
//                             <Offcanvas.Body >
//                                 <Navbar.Collapse id="basic-navbar-nav">
//                                     <Navmenu />
//                                     <div className='right-nav'>
//                                         <Lanswitcher />
//                                     </div>
//                                 </Navbar.Collapse>
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>
//                     </Container>
//                 </Navbar>

//             ))}
           
//         </>
//     );
// }

// export default Navbars;