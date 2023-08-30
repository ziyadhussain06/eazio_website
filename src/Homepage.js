import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Banner from './Home/Banner';
import Operators from './Home/Operators';
import TrustedStartups from './Home/TrustedStartups';
import HRManagementSystem from './Home/HRManagementSystem';
import BranchManagement from './Home/BranchManagement';
import OperationsManagement from './Home/OperationsManagement';
//import Testimonials from './Home/Testimonials';
import CommanQuestion from './Home/CommanQuestion';
import ReadytoEazio from './Home/ReadytoEazio';
import ScrollTrigger from 'react-scroll-trigger';

//import Row from 'react-bootstrap/Row';

function Mainpage() {
    const [counterOn, setCounterOn] = useState(false);
    return (<>
        <section className='home-page'>
            <Container fluid>
                <Banner />
                <Operators />
                <div className='margin-top'>
                <TrustedStartups />
                </div>
                <div className='margin-top'>
                <HRManagementSystem />
                </div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} >
                    {counterOn && <BranchManagement />}
                </ScrollTrigger>
                
                <OperationsManagement />
                {/* <Testimonials /> */}
                <CommanQuestion />
                <ReadytoEazio />
            </Container>
        </section>
    </>
    )
}
export default Mainpage;
