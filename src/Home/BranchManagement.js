/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import CountUp from 'react-countup';
import Emp from '../image/emp.svg'
import countericon from '../image/counter-icon.svg';

function HomeSectionFive() {
    return (
        <section className='branch-mag'>
             <div className='position'></div>
            <Container>
                <Row className='five-div  '>
                   <div className='col-lg-4 col-md-12 f-f-d pt-md-5 px-lg-0 m-auto '>
                        <h2 className='fift-div-heading pt-md-5'><span className='color-text'>Branch</span><br /> Management</h2>
                        <p className='pe-md-5 para-text pb-md-5'>
                            Real-time data for each branch location. From providing essential news, branch documents, checklists, and people concerns to producing day-end reports.
                        </p>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        {/* <div className='bg-branch'>
                        <Backgroundimg1 />
                        <Backgroundimg2 />
                            
                        </div> */}
                        <div className='card-body-01  '>
                            <div className="arrow">
                                <div id="wrapper">
                                    <h2 className='num12'><CountUp end={12} />+</h2>
                                    <img src={countericon} alt='countericon' />
                                </div>
                                <h2 className='upcoming-event pt-2'>Upcoming Events</h2>
                                <div className="bar ">
                                    <li className=' pt-2'></li>
                                    <p className='bar-text'>Charlotte Birthday is coming</p>
                                    <div className='mt-4 d-flex '>
                                        <img className="card-img" src={require('../image/card-img.png')} alt='client-img' />
                                        <span className='card-dec'>Manager</span>
                                        <span className='card-date'>14 JAN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' card-body-01 card-3  '>
                            <div className='d-flex event-card'>
                                <h2 className='num12'><CountUp end={98} />%</h2>
                            </div>
                            <p className='card-para-text'>Achieve financial targets, manage resources and people, and provide services to clients.</p>
                        </div>
                    </div>
                    <div className=' col-lg-4 col-md-12'>
                        <div className=' card-body-02  '>
                            <div className="arrow">
                                <div id="wrapper">
                                    <h2 className='num12'><CountUp end={12} />+</h2>
                                    <img src={countericon} alt='countericon' />
                                </div>
                                <h2 className='upcoming-event pt-2'>Employee Leaves</h2>
                                <div className="bar1 ">
                                    <li className=''></li>
                                    <div className='bar-content'>
                                        <div className=' d-flex '>
                                            <img className="card-img" src={require('../image/card-img.png')} alt='client-img' />
                                            <span className='card-dec card-emp-color'>Manager</span>
                                            <span className='card-date card-emp-color'>14 JAN</span>
                                        </div>
                                        <div className='mt-3 d-flex '>
                                            <img className="card-img" src={Emp} alt='client-img' />
                                            <span className='card-dec card-emp-color'>Developer</span>
                                            <span className='card-date card-emp-color'>17 MAY</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className=' card-body-01 card-4  '>
                            <div className='d-flex event-card'>
                                <h2 className='num12'><CountUp end={10} />+</h2>
                            </div>
                            <p className='card-para-text align-middle	'>Employees involved in overseeing the daily operations of a branch and ensuring that goals and objectives are met.</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )

}
export default HomeSectionFive;