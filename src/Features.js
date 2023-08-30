import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DashboardImage from './image/full-dashboard.png'
import { Container } from 'react-bootstrap';
import HomeSectionFour from './Home/HRManagementSystem';
import HomeSectionFive from './Home/BranchManagement';
import HomeSectionSix from './Home/OperationsManagement';
// import HomeSectionSeven from './Home/Testimonials';
import FeaturTableButton from './Feature/FeatureTableButton';

function Feature() {
    return (
        <>
            <section className='feature-page'>
                <Container fluid>
                    <section className='about-us-banner text-center  ms-md-5 me-md-5 ms-lg-5 me-lg-5 mt-md-5' >
                        <Container fluid>
                            <Row>
                                <h2 className='banner-heading'>Features</h2>
                                <img src={DashboardImage} alt='Eazio-Dashboard' />
                            </Row>
                        </Container>
                    </section>
                    <section className='top-section s-feature'>
                        <Container fluid >
                            <Row >
                                <HomeSectionFour />
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container fluid >
                            <Row >
                                <HomeSectionFive />
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <HomeSectionSix/>   
                    </section>
                    <section>
                        <Container fluid>
                            <Row className='text-center'>
                                <FeaturTableButton/>
                            </Row>
                        </Container>
                    </section>
                    {/* <section>
                        <Container fluid >
                            <Row >
                                <HomeSectionSeven />
                            </Row>
                        </Container>
                    </section> */}
                </Container>
            </section>
        </>
    )
}
export default Feature;
