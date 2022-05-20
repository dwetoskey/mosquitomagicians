import { Carousel } from 'react-bootstrap';
import placeholderimg from '../../images/placeholder.png';
import bbqimg from '../../images/bbq.jpg';
import birthdayimg from '../../images/birthday.jpg';
import facebookbanner from '../../images/facebook banner 3.jpg';

function Lead() {

    return (
        <div className=' d-flex h-100 justify-content-center'>
        <Carousel className='h-50'>
            <Carousel.Item className=''>
                <img
                    className="carouselimg"
                    src={bbqimg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={birthdayimg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={facebookbanner}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

    )
}

export default Lead;