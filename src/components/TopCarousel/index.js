import { Carousel } from 'react-bootstrap';
import placeholderimg from '../../images/placeholder.png';

function Lead() {

    return (
        <div className=' d-flex h-100 justify-content-center'>
        <Carousel className='h-50'>
            <Carousel.Item className='h-25'>
                <img
                    className="carouselimg"
                    src={placeholderimg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimg h-25"
                    src={placeholderimg}
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
                    src={placeholderimg}
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