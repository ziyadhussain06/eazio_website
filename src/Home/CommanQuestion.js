import Row from 'react-bootstrap/Row';
import Faqquestion from '../Home/Faq'
import Faqright from '../Home/Faqright';
import { Container } from 'react-bootstrap';

function HomeSectionEight() {
    return (
        <section className='margin-top'>
            <Container>
            <Row >
                <div className=' text-center'>
                    <h3 className='eight-div-btn '>Common Questions</h3>
                    <h2 className='eight-div-heading pt-md-3'>We’ve got you covered</h2>
                </div>
                <div className='col-md-6 pt-md-5 p-0'>
                    <Faqquestion />
                </div>
                <div className='col-md-6 pt-md-5 p-0'>
                    <Faqright />
                </div>
            </Row>
            </Container>
        </section>
    )
}
export default HomeSectionEight;