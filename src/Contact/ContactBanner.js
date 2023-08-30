import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ContactBannerButton from '../About/AboutBannerButton'
import { Container } from 'react-bootstrap';
function ContactBanner() {
    return (
        <>
            <section className='Contact about-us-banner text-center mx-md-5 mx-lg-5 mt-md-5 ' >
                <Container fluid>
                    <h1 className='banner-heading'>Contact Us</h1>
                    <h4 className='white pt-md-3 text mb-3 Banner-sub-heading'>We're Only One Click Away - Let's Connect!</h4>
                    {/* <p className='white text-margin-top text'> See how Eazio’s… user-friendly HR Platform gives an effectively modern experience.</p> */}
                    <ContactBannerButton />
                </Container>
            </section>
        </>
    )
}
export default ContactBanner;