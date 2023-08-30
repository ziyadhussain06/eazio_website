import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Getfreedemo from './Freeforsignup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function Careers(){
    return(
        <>
   

        <section className='about-us-banner text-center  ms-md-5 me-md-5 ms-lg-5 me-lg-5 mt-md-5' >
            <h2 className='banner-heading'> Careers</h2>
            <p className='white pt-lg-3 pt-md-3 text'>You know what Eazio does.</p>
            <p className='white text-margin-top text'> Now learn why we do what we do — and the people who make it possible.</p>
            <div className='d-flex pt-lg-3 pt-md-3  justify-content-center'>
                <img className="dividerline" src={require('./image/divider.png')} alt='divider-line'/>
                <p className='border-left white text'> A simple to use<br />
                    Intelligent HR platform</p>
                <Getfreedemo />
            </div>

        </section>
       
       <section className='careers text-center'>
       <img className="eazio-icon1" src={require('./image/eazio-icon.png')} alt='Eazio-icon'/>
       <h3 className='main-heading '>Become a part Of our big family<br/>to inspire and get inspired by<span className='color-text'> <br/>professional experts.</span></h3>  
       </section>
       <section className='text-center margin-top'>
        <h4 className='positions'>Open Positions</h4>
        <p>11 open positions across all offices across all teams.</p>
        <div className='d-flex justify-content-center'>       
            <div className="dropdown">
            <button className="btn location dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            All Offices
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
            </ul>
            </div>
            <p className='px-3  and'>and</p>
            <div className="dropdown">
            <button className="btn department dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            All Teams
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
            </ul>
            </div>  
        </div>

       </section>
       <section className='px-md-5 px-lg-5 '>
       
        <Container fluid>
        <Row className=' job-div'>
        
        <div className='job-post col-lg-9 col-sm-12'>
        <h3 className='job-field-heading pb-5'>Marketing</h3>
            <h3 className='job-post-heading'>Copywriter (Intermediate)</h3>
            <h4 className='job-post-time'>San Francisco, CA   | <span className='color-text'> Part Time </span></h4>
            <p className='pt-md-3 job-post-description para-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='apply-btn-div col-lg-3 col-sm-12 m-auto '>
                <button className='apply-btn btn'>Apply Now</button>
            </div>
            <hr className='mt-5'/>
            <div className='job-post col-lg-9 col-sm-12 mt-5'>
        
            <h3 className='job-post-heading'>Copywriter (Intermediate)</h3>
            <h4 className='job-post-time'>San Francisco, CA   | <span className='color-text'> Part Time </span></h4>
            <p className='pt-md-3 job-post-description para-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='apply-btn-div col-lg-3 col-sm-12 m-auto'>
                <button className='apply-btn btn'>Apply Now</button>
            </div>
            <hr className='mt-5'/>
        </Row>
        </Container>
        <section className='text-center margin-top'>
        <Container>
            <Row>
            <h3 className='designation-heading'>Can't find <span className='color-text'> the perfect Designation?</span></h3>  
            <p className='description-para-text pt-2'>Let us know about skills...</p>
            <div>
            <button className='btn resume mt-2'>Submit your Resume</button></div>
            </Row>
        </Container>
        </section>

        

        
        </section>

        
        
        



        </>
    )
}
export default Careers