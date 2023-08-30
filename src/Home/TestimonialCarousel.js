import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import Staricon from "../Staricon";
export default function Testimonialcarousel() {
    
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="testimonial-slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable={false}
            focusOnSelect={true}
            infinite
            itemClass="testimonial-img"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={true}
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            
            <Card className=" mt-md-2 ">
            <Card.Body className="black test-card">
                    <div className="tesimonial-img d-flex">
                    <Card.Img className="test-img" variant="top" src={require('../image/testimonial-img-01.png')} alt='clients-image'/>
                    <div className="test-content mt-md-3">
                        <p className='test-card-name'>John Doe</p>
                        <p className='test-card-dec'>Manager</p>
                    </div>
                    </div>
                    <Card.Title className="test-title">"I recommend Eazio"</Card.Title>
                    <Card.Text className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                    </Card.Text>
                    <Staricon/>
                </Card.Body>
            </Card>
            <Card className=" mt-md-2 ">
                <Card.Body className="black test-card">
                    <div className="tesimonial-img d-flex">
                    <Card.Img className="test-img" variant="top" src={require('../image/testimonial-img-02.png')} alt='clients-image'/>
                    <div className="test-content mt-md-3">
                        <p className='test-card-name'>Alice Smith</p>
                        <p className='test-card-dec'>Manager</p>
                    </div>
                    </div>
                    <Card.Title className="test-title">"I recommend Eazio"</Card.Title>
                    <Card.Text className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                    </Card.Text>
                    <Staricon/>
                </Card.Body>
            </Card>
            <Card className=" mt-md-2 ">
                <Card.Body className="black test-card">
                    <div className="tesimonial-img d-flex">
                    <Card.Img className="test-img" variant="top" src={require('../image/testimonial-img-03.png')} alt='clients-image'/>
                    <div className="test-content mt-md-3">
                        <p className='test-card-name'>Sophia Miller</p>
                        <p className='test-card-dec'>Manager</p>
                    </div>
                    </div>
                    <Card.Title className="test-title">"I recommend Eazio"</Card.Title>
                    <Card.Text className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                    </Card.Text>
                    <Staricon/>
                </Card.Body>
            </Card>
            
            
            
            
        </Carousel>
    );

}