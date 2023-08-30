import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container } from 'react-bootstrap';
import firstfeatureicon from '../image/firstfeatureicon.svg'
import secondfeatureicon from '../image/onboard.svg'
import thirdfeatureicon from '../image/sheild-icon.svg'
import fourthfeatureicon from '../image/star-icon.svg'
import fifthfeatureicon from '../image/thunder-icon.svg'
import Trainingicon from '../image/training-icon.svg'

function AboutEazioMean(){
    return(
        <section>
            <Container fluid>
                <Row>
                    <h3 className='color-text mb-3'>ABOUT US</h3>
                    <h2 className='main-heading '>What Does  <span className='color-text'>Eazio</span><br/> Mean?</h2>
                    <p className='about-para-text'>Eazio combines the terms "easy" and "input-output." The idea behind Eazio is to simplify the process of improving HR operations systematically and efficiently.</p>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={firstfeatureicon} alt='Feature-icon'/>
                        <h4 className='pt-4'>Payroll</h4>
                        <p className='pt-2'>Take a load off your shoulders because payroll headaches are now over! </p>
                    </div>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={secondfeatureicon} alt='Feature-icon' />
                        <h4 className='pt-4'>Your Voice</h4>
                        <p className='pt-2'>Gather the genuine feelings of your people. Your voice enables employees to share their thoughts anonymously.</p>
                    </div>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={thirdfeatureicon} alt='Feature-icon'/>
                        <h4 className='pt-4'>Time-Off Request</h4>
                        <p className='pt-2'>Manage your employees’ time-off requests centrally from one place. Keep your team rested!</p>
                    </div>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={fourthfeatureicon} alt='Feature-icon'/>
                        <h4 className='pt-4'>Attendance</h4>
                        <p className='pt-2'>Manage time & attendance for one or multiple locations.</p>
                    </div>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={fifthfeatureicon} alt='Feature-icon'/>
                        <h4 className='pt-4'>Employee Records</h4>
                        <p className='pt-2'>No more filing cabinets taking up space in your office - You can always have the data you need when you need it.</p>
                    </div>
                    <div className='feature-icon-div col-md-4 pt-lg-5 pt-md-1'>
                        <img className="feature-icon" src={Trainingicon} alt='Feature-icon'/>
                        <h4 className='pt-4'>Train Your People</h4>
                        <p className='pt-2'>Empower your people by sharing knowledge and guides with our training module. </p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default AboutEazioMean;