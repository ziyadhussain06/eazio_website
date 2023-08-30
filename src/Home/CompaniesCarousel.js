import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import Baron from '../image/Baron.svg';
import More from '../image/more.svg';
import Sw from '../image/SW.svg';
import Chaps from '../image/Chaps.svg';
import Magroup from '../image/MA.svg';
import EC from '../image/ec_logo.png';

export default function Companiescarousel() {
    
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className="Companies-slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable={false}
            focusOnSelect={true}
            infinite
            itemClass="Companies-img"
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
                    items: 5,
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
            
            <Card.Img className="logo-color chaps" variant="top" src={Chaps} alt='chaps-co-logo'/>
            <Card.Img className="logo-color  " variant="top" src={EC} alt='eight-clouds'/>
            <Card.Img className="logo-color magroup" variant="top" src={Magroup} alt='magrouplogo'/>
            <Card.Img className="logo-color sw1 " variant="top" src={Sw} alt='sw1-logo'/>
            <Card.Img className="logo-color more" variant="top" src={More} alt='morecafe-logo'/>
            <Card.Img className="logo-color baroncabot" variant="top" src={Baron} alt='baroncabot-logo'/>
                
            
            
        </Carousel>
    );

}