import { Container, Row } from 'react-bootstrap';
//import Phoneicon from '../image/phone-icon.svg'
import Mailicon from '../image/mail-icon.svg'
import Mapicon from '../image/map-icon.svg'
import Circleimg from '../image/circle-icon.svg'
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
// import { RadioButton } from "../RadioButtons";
import  HubspotContactForm  from './HubspotContactForm';
import '../App.css';
function Contactfrom() {
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const radioChangeHandler = (e) => {
        setPaymentMethod(e.target.value);
    };
    // //business type hint//
    // const [value, setValue] = React.useState('');
    // const handleChange = (event) => {
    // setValue(event.target.value);
    // };

    return (
        <section className="contact-form mx-lg-5 mx-4 ">
            <Container fluid>
                <Row className='mx-lg-5 mx-md-5'>
                    <div className="main-div " >
                        <Row className='contact-row'>
                            <div className="col-lg-4  col-md-12 col-12 back-color p-5 ">
                                <h3 className='contact-info'>Contact Information</h3>

                                <div className='contacts'>
                                    {/*<li className='contact-icon'><img src={Phoneicon} /><a href="tel:+971">+971</a></li> */}
                                    <li className='contact-icon'><img src={Mailicon} alt='email icon' /><a href="mailto:Hello@eazio.com">hello@eazio.com</a></li>
                                    <li className='contact-icon d-flex'><img src={Mapicon} alt='phone icon' className='address' /><div>Gold Tower, Office 3401 Cluster I, JLT, Dubai, UAE
                                    </div></li>
                                </div>
                                <div className='social-icons d-flex '>
                                    <div className='social-bottom'>
                                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/company/eazio/'>
                                        <div className='icon'>
                                            <i className='fa fa-fw fa-linkedin'></i>
                                        </div>
                                    </a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/eazio.io/'>
                                        <div className='icon'>
                                            <i className='fa fa-fw fa-facebook'></i>
                                        </div>
                                    </a>
                                    <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/eaziodotcom/'>
                                        <div className='icon'>
                                            <i className='fa fa-fw fa-instagram'></i>
                                        </div>
                                    </a>
                                    </div>
                                    <img src={Circleimg} className='circle-icon' alt='circle icon' />
                                </div>
                            </div>
                            <div className="col-lg-8 px-lg-5 px-4 mb-4 pt-lg-5">
                                <h2 className='contact-info col-black pb-3'>Contact Information</h2>
                                <HubspotContactForm 
                                    region="eu1"
                                    portalId="139509631"
                                    formId='0e34af50-b3f5-4327-9a87-7484c307e912'
                                    />
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container >
        </section >
    )
}
export default Contactfrom;