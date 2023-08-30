import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Getfreedemo from './Freeforsignup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import HomeSectionnine from './Home/ReadytoEazio';
import HomeSectionEight from './Home/CommanQuestion';
//import FeatureButton from './Feature/FeatureTableButton';
//import { useState } from "react";


function Price() {
    //const [toggleState, setToggleState] = useState(1);

    //const toggleTab = (index) => {
      //  setToggleState(index);
    //};

    return (
        <>
            <section >
                <Container fluid>
                    <section className='Contact about-us-banner text-center mx-md-5 mx-lg-5 mt-md-5 ' >
                        <Container fluid>
                            <h1 className='banner-heading'>Pricing</h1>
                            <h4 className='white pt-lg-3s text mb-3 Banner-sub-heading'>Get Started Now</h4>
                            {/*<p className='white text-margin-top text'>Try Eazio for a 3-month FREE trial - and make the pricing work for you.</p> */}
                            <div className='d-flex pt-lg-3 pt-md-3  justify-content-center'>
                                <img className="dividerline" src={require('./image/divider.png')} alt='divider-line' />
                                <p className='border-left white text'> Eazio is currently free for all users!<br />
                                Let's empower HR together today.</p>
                                <Getfreedemo />
                            </div>
                        </Container>
                    </section>
                    <section className='margin-top pricing'>
                        <Container fluid>
                            <Row>
                                <img className="eazio-icon1" src={require('./image/eazio-icon.png')} alt='eazio-icon' />
                                <h2 className='text-center main-heading'>it's as Eazio as that!</h2>
                                <p className='text-center pricing-text pt-4'>Eazio is currently free for all users.<br/>
                                No credit card required. No lenghty onboarding process. Let's empower HR together today.
                                </p>
                                {/* <div className="text-center pt-lg-5 mb-lg-5">
                                    <button className='tabs {toggleState === 1 ? "tabs active-tabs" : "tabs"}' onClick={() => toggleTab(1)}>
                                        Monthly
                                    </button>
                                    <button className='tabs {toggleState === 2 ? "tabs active-tabs" : "tabs"}' onClick={() => toggleTab(2)}>
                                        Yearly
                                    </button>
                                </div> */}
                                {/* <div className="contents-tabs">
                                    <div className={toggleState === 1 ? "contents  active-contents" : "contents"} >
                                        <section className='monthly'>
                                            <Row>
                                                <div className="promos px-lg-5 pt-5">
                                                    <div className="promo first">
                                                        <h4 className='package-text pt-5 '>Basic</h4>
                                                        <p className='price-rate pb-3'>AED 200.99 <span className='month'>/month</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                    <div className="promo third scale">
                                                        <div className='popular'>
                                                            <h3 >Most popular</h3>
                                                        </div>
                                                        <h4 className='package-text pt-5'>Premium</h4>
                                                        <p className='price-rate pb-3'>AED 209.99 <span className='month'>/month</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                    <div className="promo second">
                                                        <h4 className='package-text pt-5'>Business</h4>
                                                        <p className='price-rate pb-3'>AED 222.99 <span className='month'>/month</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                            <section className='top-section'>

                                                <Row>
                                                    <img className="eazio-icon" src={require('./image/eazio-icon.png')} alt='eazio-icon' />
                                                    <div className='d-flex justify-content-end mt-lg-5 px-lg-5'>
                                                        <div className='me-lg-5 me-2'>
                                                            <h2 className='basic-pack'>Basic</h2>
                                                            <h4 className='price-pack'>AED 200.99<span className='per-month'>per month</span></h4>
                                                        </div>
                                                        <div className='me-lg-5 me-2'>
                                                            <h2 className='basic-pack'>Business</h2>
                                                            <h4 className='price-pack'>AED 209.99<span className='per-month'>per month</span></h4>
                                                        </div>
                                                        <div >
                                                            <h2 className='basic-pack'>Premuim</h2>
                                                            <h4 className='price-pack'>AED 222.99<span className='per-month '>per month</span></h4>
                                                        </div>
                                                    </div>
                                                </Row>

                                            </section>
                                            <FeatureButton />
                                        </section>
                                    </div>

                                    <div className={toggleState === 2 ? "contents  active-contents" : "contents"} >
                                        <section className='yearly'>
                                            <Row>
                                                <div className="promos px-lg-5 pt-5">
                                                    <div className="promo first">
                                                        <h4 className='package-text pt-5 '>Basic</h4>
                                                        <p className='price-rate pb-3'>AED 2025.99 <span className='month'>/year</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                    <div className="promo third scale">
                                                        <div className='popular'>
                                                            <h3 >Most popular</h3>
                                                        </div>
                                                        <h4 className='package-text pt-5'>Premium</h4>
                                                        <p className='price-rate pb-3'>AED 2035.99 <span className='month'>/year</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                    <div className="promo second">
                                                        <h4 className='package-text pt-5'>Business</h4>
                                                        <p className='price-rate pb-3'>AED 2046.99 <span className='month'>/year</span></p>
                                                        <div className='feature'>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> One Time Setup Fee</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Employee  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Management  Login</p>
                                                            <p className='color'><i className='fa fa-check check-icon' aria-hidden="true"></i> Branches</p>
                                                            <button className='started-btn btn'>Get Started</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                            <section className='top-section'>

                                                <Row >
                                                    <img className="eazio-icon" src={require('./image/eazio-icon.png')} alt='eazio-icon' />
                                                    <div className='d-flex justify-content-end mt-lg-5 px-lg-5'>
                                                        <div className='me-lg-5 me-2'>
                                                            <h2 className='basic-pack'>Basic</h2>
                                                            <h4 className='price-pack'>AED 2025.99<span className='per-month'>per yearly</span></h4>
                                                        </div>
                                                        <div className='me-lg-5 me-2'>
                                                            <h2 className='basic-pack'>Business</h2>
                                                            <h4 className='price-pack'>AED 2035.99<span className='per-month'>per yearly</span></h4>
                                                        </div>
                                                        <div >
                                                            <h2 className='basic-pack'>Premuim</h2>
                                                            <h4 className='price-pack'>AED 2046.99<span className='per-month '>per yearly</span></h4>
                                                        </div>
                                                    </div>
                                                </Row>

                                            </section>
                                            <FeatureButton />
                                        </section>
                                    </div>
                                </div> */}

                            </Row>
                        </Container>
                    </section>
                    <section className='margins'>
                        <Row>
                            < HomeSectionEight />
                        </Row>

                    </section>
                    <section className='margin-top'>
                        < HomeSectionnine />
                    </section>
                </Container>
            </section>
        </>
    )
}
export default Price;