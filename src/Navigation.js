import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './App.css';

function Navmenu(){
    
    return(
      <>
        <Nav className="m-auto" >   
        <Link className='navlink nav-link' to="./" ><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Home</span>} /></Link>
            <Link className='navlink nav-link' to="./about" ><ScrollToTop top="0" smooth component={<span className='top-header-menu' >About</span>} /></Link>
            <Link className='navlink nav-link'  to="./pricing"><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Pricing</span>} /></Link>
            <a className="navlink nav-link" href="https://eazio.com/blog/"><span className='top-header-menu' >Blog</span></a>
            {/* <Link className='navlink nav-link' to="./beta/features">Features</Link>*/ }
            <Link className='navlink nav-link' to="./contact-us"><ScrollToTop top="0" smooth component={<span className='top-header-menu' >Contact</span>} /></Link>
        </Nav>
      </>
    )
}
export default Navmenu;