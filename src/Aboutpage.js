import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import AboutBanner from './About/AboutBanner';
import TrustedStartups from './Home/TrustedStartups';
//import Testimonials from './Home/Testimonials';
import ReadytoEazio from './Home/ReadytoEazio';
import CommanQuestion from './Home/CommanQuestion';
import { Container } from 'react-bootstrap';
import StandardSay from './About/StandardSay';
import AboutUs from './About/AboutUs';
function About() {
    return (
        <>
            <section >
                <Container fluid >
                    <AboutBanner />
                </Container>
                <section >
                    <AboutUs />
                </section>
            </section>
            <section>
                <Container fluid>
                    <section className='margin-top'>
                        <Container>
                            <Row>
                                <TrustedStartups />
                            </Row>
                        </Container>
                    </section>

                    {/* <section className='about-testimonial ' >
                <Container fluid>
                    <Row>
                        <Testimonials />
                    </Row>
                </Container>
            </section > */}
                    <section className='text-center standard-div margin-top'>
                        <Container fluid>
                            <Row>
                                <StandardSay />
                            </Row>
                        </Container>
                    </section>

                    <section className='margin-top'>
                        <CommanQuestion />
                    </section>
                    <section>

                        <ReadytoEazio />

                    </section>

                </Container>
            </section>
        </>
    )
}
export default About;
