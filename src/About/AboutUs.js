import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutEazioMean from '../About/AboutEazioMean';
function AboutUs(){
    return(
        <section className='d-lg-flex d-md-flex d-sm-block margin-top'>
            <img className="eazio-icon" src={require('../image/eazio-icon.png')} alt='Eazio-icon'/>
            <div className='background-shadow'></div>
            <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12 pe-lg-3 pe-md-3 pe-sm-3'>
                <img className="about-dashborad" src={require('../image/about-dashboard.png')} alt='eazio-dashboard'/>
            </div>
            <div className='col-md-12 col-lg-8 col-xl-8 col-sm-12                                                                                                                                                                                                                                                                                                                                                                            px-4 px-lg-5 mt-md-5 mt-lg-5 mt-5'>
                <AboutEazioMean/>
            </div>
        </section>
    )
}
export default AboutUs;