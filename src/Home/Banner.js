/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Backgroundimg1 from '../Home/Backgroundimg1';
import Backgroundimg2 from '../Home/Backgroundimg2';
import Getfreedemo from '../Freeforsignup'
import Partnerimg1 from './Partnerimg1';
import Partnerimg2 from './Partnerimg2';
import Partnerimg3 from './Partnerimg3';
import Texteffect from '../Home/TextTransition';
import Dashboardimg from '../image/dashboardimg.webp';

function Banner() {

    return (
        
        <Row className='first-div'>
            <Backgroundimg1 />
            <Backgroundimg2 />
            <div className='col-md-6 px-4 px-lg-5 m-auto'>
                <span className='typertext'>
                    <h1 className='main-heading pt-md-1 pt-lg-5'>Leverage Your <span className='color-text'>People</span> With <Texteffect /></h1>
                </span>
                <p className='para-text pt-lg-5 pt-md-1'>We are Eazio! An Easy-To-Use HR and Operations Platform.</p>
                <div className='d-md-flex pt-lg-5 pt-md-1 '>
                    <div className='d-flex pt-md-2'>
                    <img className="dividerline" src={require('../image/divider.png')} alt='divider-line' />
                    <p className='border-left'> Eazio is currently free for all users!
                        <br />
                        Let's empower HR together today.</p>
                    </div>

                    <Getfreedemo />
                </div>
                <Partnerimg1 />
                <Partnerimg2 />
                <Partnerimg3 />
            </div>
            <div className='col-md-6 z-index-1 dashboard-img-div'><img className='dashboardimgbanner' src={Dashboardimg} alt="dashbord image"/></div>
        </Row>
    )
}
export default Banner;