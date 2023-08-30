import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Row from 'react-bootstrap/Row';
import CompaniesCarousel from '../Home/CompaniesCarousel';

function TrustedStartups(){
    return(
            <Container>
            <Row className='margin-section'>
            <p className='third-div-text text-align-center'>TRUSTED BY startups and large enterprises</p> 
            <CompaniesCarousel />
            </Row>
            </Container> 
            
    );
}
export default TrustedStartups;