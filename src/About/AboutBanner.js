import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutBannerButton from './AboutBannerButton'
import { Container } from 'react-bootstrap';

function AboutBanner(){
    return(
        <>
            <section className='about-us-banner text-center mx-md-5 mx-lg-5 mt-md-5 margin-top' >
                <Container fluid>
                <h1 className='banner-heading pb-3'>About</h1>
                {/* <h4 className='white pt-lg-3 pt-md-3 text mb-3'>You Just Press & Let Eazio Do The Rest!</h4> */}
                <h4 className='white pt-md-3 text mb-3 Banner-sub-heading'>Eazio is an HR and operations platform, designed by<br></br> operators that understand business needs.</h4>
                <AboutBannerButton/>
                </Container>
            </section>
        </>
    )
}
export default AboutBanner;