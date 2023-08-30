
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import Carousel from '../Home/ProductCarousel';
import { Container } from 'react-bootstrap';

function Operators() {
    return (
        <>
            <section className='operators margin-top'>
                <Container fluid>
                    <Row>
                        <div className='col-md-6 col-lg-7 px-4 px-lg-5'>
                            <h2 className='Second-div-heading pt-md-1'>Designed By Operators, Built By <span className='color-text'>Entrepreneurs...</span></h2>
                            
                        </div>
                        <div className='col-md-6 col-lg-5 px-4 px-lg-5'>
                            <div className='d-flex justify-content-end  '>
                                <p className='border-left pt-md-4'> The Eazio platform is an easy-to-use system<br /> offering a slick and modern user interface.</p>
                                <img className="dividerline-right" src={require('../image/divider.png')} alt='Right-divider-line' />
                            </div>
                        </div>
                        
                    </Row>
                </Container>
            </section>
            <section>
                <Row>
                    <Carousel />
                  <img className="eazio-icon" src={require('../image/eazio-icon.webp')} alt='eazio-icon' />
                    </Row>
            </section>

            
        </>
    );
}
export default Operators;