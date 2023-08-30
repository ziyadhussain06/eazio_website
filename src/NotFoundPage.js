
import { Container, Row } from 'react-bootstrap';
import Icon404 from './image/notfound-icon.svg'
//import { Link } from 'react-router-dom';
//import ScrollToTop from "react-scroll-to-top";
import { React } from "react";  

export default function NotFoundPage() {
    
    return (
        <>
        <section className='page-not-found'>
                <Container fluid>
                    <Row>
                        <div className='found-main-div'>
                        <div className='backimage1-div'></div>
                        <div className='backimage2-div'></div>
                            <div className='icon-404 text-center'>
                                <img src={Icon404} alt='404 icon' className='notfound-img'/>
                                <h2 className='text-center pt-5 '>Oh no. We lost this page</h2>
                                <p className='text-center pt-3 pb-3 notfound-para'>We searched everywhere but couldn’t find what you’re looking for.<br/> Let’s find a better place for you to go.</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )

}