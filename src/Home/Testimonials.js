//import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Getfreedemo from '../Freeforsignup'
import Testimonialcarousel from '../Home/TestimonialCarousel';
function HomeSectionSeven() {
    return (
        <section>
            <Row className='p-lg-5 px-4'>
            <img className="eazio-icon1" src={require('../image/eazio-icon.png')} alt='eazio-icon'/>
                <div className='col-md-7 col-lg-5 seventh-div pb-md-4'>
                    <button className='why-choose-us'>testimonials</button>
                    <h2 className='seventh-div-heading pt-md-4'>See what our <span className='color-text'>clients</span> say</h2>
                    <p className='para-text pt-md-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</p>
                </div>
                <div className='col-md-5 col-lg-7 seventh-div-btn pe-md-5'>
                    <Getfreedemo />
                </div>
                <Testimonialcarousel />
            </Row>
        </section>
    )
}
export default HomeSectionSeven;