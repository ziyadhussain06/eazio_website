import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import { TypeAnimation } from 'react-type-animation';

import ScrollToTop from "react-scroll-to-top";

function HomeSectionnine() {
    return (
        <section className='margin-top'>
          <Container>
                <Row className=' '>
                    <div className='black nine-row d-xl-flex d-lg-flex d-md-flex '>
                        <div className=' col-md-6 col-sm-12 col-xl-7 col-lg-6'>
                            <TypeAnimation
                                sequence={[
                                'Eazio is Currently Free For All Users',
                                3000,
                                ]}
                                wrapper="h3"
                                cursor={false}
                                repeat={3}
                                className="nine-div-heading"
                            />
                            <ScrollToTop  smooth component={ <a className="sign-up-anchor signup-btn-black eaz-fw-600" href='https://eazio.com/auth/register'><span className='nine-div-btn btn mt-md-4 color-white'>SING UP NOW</span></a>} />
                        </div>
                        <div className=' col-md-6 col-sm-12 col-xl-5 col-lg-6 '>
                            <img className="fouth-in-one" src={require('../image/fourth_in_one.webp')} alt='Requests-img'/>
                        </div>
                    </div>
                </Row>
                </Container>
        </section>
    )
}
export default HomeSectionnine;