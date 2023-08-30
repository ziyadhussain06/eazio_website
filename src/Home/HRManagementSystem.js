import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import FadeIn from 'react-fade-in';
import ScrollTrigger from 'react-scroll-trigger';

function HomeSectionFour() {
    const [hrBenefitsOn,sethrBenefitsOn] = useState(false);
    return (
        <section className=''>
            <Container>
                <Row className='fouth-div'>
                    <h2 className='fourth-div-text'>Quicker Outcomes and Wiser <br/><span className='color-text'>HR Decisions!</span></h2>
                    <div className='col-md-6 hr-image'>
                        <img className="about-img" src={require('../image/HR.webp')} alt='About-HR'/>
                    </div>
                    <div className='col-md-6 pt-md-5 px-4'>
                        <span className='why-choose-us'>why choose us</span>
                        <h2 className='fourth-div-heading pt-md-5'><span className='color-text-2'>Human Resource</span> <br/>Management <br/>System</h2>
                        <p className='para-text mt-4 mb-4'>Your all-in-one HR Platform you and your people will love.<br/> Eazio optimises your HR needs while boosting your people’s<br/> productivity.</p>
                        <ScrollTrigger onEnter={()=>sethrBenefitsOn(true)} >
                        { hrBenefitsOn && 
                            <FadeIn delay="500">
                                <p className='para-text'><img className="check-icon" src={require('../image/check_solid_1.webp')} alt='check-icon'/> Automate Time & Attendance. </p>
                                <p className='para-text'><img className="check-icon" src={require('../image/check_solid_1.webp')} alt='check-icon'/> Paperless Onboarding.</p>
                                <p className='para-text'><img className="check-icon" src={require('../image/check_solid_1.webp')} alt='check-icon'/> Meeting Requests.</p>
                                <p className='para-text' ><img className="check-icon" src={require('../image/check_solid_1.webp')} alt='check-icon'/> Time-Off Request. </p>
                            </FadeIn>
                        }
                        </ScrollTrigger>
                    </div>
                </Row>
                </Container>
        </section>
    )
}
export default HomeSectionFour;