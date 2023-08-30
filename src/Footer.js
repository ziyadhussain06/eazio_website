/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Newsletter from './NewsLetter';
import LogoWhite from './image/logo-white.svg';
import ScrollToTop from "react-scroll-to-top";




function Footer() {
   
    return (
        <div className='black'>
            <Container >
                <Row className=' footer '>
                    <div className='col-md-4 pe-md-5'>
                    <Link className='navlink'  to="./"><ScrollToTop top="0" smooth component={<span className='top-header-menu' ><img className="job-statistics-img" src={LogoWhite} alt='eazio-logo'/></span>}/></Link>
                        <p className='footer-text'>Eazio enables Human Resource Departments to manage their time more efficiently. Enhancing business operations and automating processes.</p>
                    </div>
                    <div className='col-md-4 pe-md-5'>
                        <h4 className='footer-sec-col-txt'>PAGES</h4>
                        <ul>
                            <li className='footer-menu-item'><Link to="./"><ScrollToTop  smooth component={<span style={{ color: "white" }}>Home</span>} /></Link></li>
                            <li className='footer-menu-item'><Link to="./about"><ScrollToTop smooth component={<span style={{ color: "white" }}>About</span>} /></Link></li>
                            <li className='footer-menu-item'><Link to="./pricing"><ScrollToTop smooth component={<span style={{ color: "white" }}>Pricing</span>} /></Link></li>
                            {/*<li className='footer-menu-item'><Link to="./beta/feature"><ScrollToTop smooth component={<span style={{ color: "white" }}>Features</span>} /></Link></li> */}
                              <li className='footer-menu-item'><Link to="https://eazio.com/blog" ><ScrollToTop smooth component={<span style={{ color: "white" }}>Blog</span>} /></Link></li>
                            <li className='footer-menu-item'><Link to="./contact-us"><ScrollToTop smooth component={<span style={{ color: "white" }}>Contact</span>} /></Link></li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <h4 className='footer-third-col-heading '>SUBSCRIBE TO OUR NEWSLETTER</h4>
                        <p className='text-white pt-3'>Subscribe to our newsletter today and be the first to know about everything happening. </p>
                        <div className='pt-4'>
                            <Newsletter/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center eight-div'>
                        <a href='https://www.linkedin.com/company/eazio/' target="_blank" rel="noopener noreferrer">
                            <div className='icon'>
                                <i className='fa fa-fw fa-linkedin'></i>
                            </div>
                        </a>
                        <a href='https://www.facebook.com/eazio.io/' target="_blank" rel="noopener noreferrer">
                            <div className='icon'>
                                <i className='fa fa-fw fa-facebook'></i>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/eaziodotcom/' target="_blank" rel="noopener noreferrer">
                            <div className='icon'>
                                <i className='fa fa-fw fa-instagram'></i>
                            </div>
                        </a>
                    </div>
                </Row>
            </Container>
            <div className='text-center'>
                <p className='powered-title'>© Powered By <Link className='navlink color-text'  to="./" >Eazio</Link> — 2023</p>
            </div>
        </div>
    );
}
export default Footer;