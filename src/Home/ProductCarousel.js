import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import Product01 from '../image/product-01.svg';
import Product02 from '../image/product-02.svg'
import Product03 from '../image/product-03.svg'
import Product04 from '../image/product-04.svg'
import Product05 from '../image/product-05.svg'
export default function Carousels() {
    
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={true}
            className="product-slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable={false}
            focusOnSelect={true}
            infinite
            itemClass="product-img"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover={true}
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive = {{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
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
            <Card.Img variant="top" src={Product01} alt='product-image'/>
            <Card.Img variant="top" src={Product02} alt='product-image'/>
            <Card.Img variant="top" src={Product03} alt='product-image'/>
            <Card.Img variant="top" src={Product04} alt='product-image'/>
            <Card.Img variant="top" src={Product05} alt='product-image'/> 
        </Carousel>
    );

}