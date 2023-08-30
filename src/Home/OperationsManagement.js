
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
function HomeSectionSix(){
    return(
        <Row className='back-black'>
            <h2 className='sixth-div-heading pt-md-5 pb-4'><span className='color-text'>Operations </span> Management </h2>
            <p className='sixth-div-text pt-md-3 para-text '>With Eazio, managing company operations becomes simple, easy, and transparent.</p>
            <p className=' sixth-div-text'> <Link className='' to="/contact-us"><ScrollToTop top="0" smooth component={<span className='color-text' >Learn more about operations <i className='fa fa-arrow-right'></i></span>} /></Link></p>
            <div className='text-center mt-md-3 mb-md-5'>
                <img className="gross-salary-img me-md-5" src={require('../image/gross-salary.png')} alt='Gross-salary'/>
                <img className="job-statistics-img" src={require('../image/job-statistics.png')} alt='job-statistics'/>
            </div>
        </Row>
    )
}
export default HomeSectionSix;