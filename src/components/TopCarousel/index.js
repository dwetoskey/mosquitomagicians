import { Carousel } from 'react-bootstrap';
import bbqimg from '../../images/bbq.jpg';
import birthdayimg from '../../images/birthday.jpg';
import facebookbanner from '../../images/facebook banner 3.jpg';
import { BsFacebook, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaSms } from 'react-icons/fa';
import meadow from '../../images/meadow.jpg';
import childpet from '../../images/childpet.jpg';
import lawn from '../../images/lawn.jpg';

function Lead() {

    return (
        <div className=' d-flex justify-content-center '>
            <div className='mobile'>
        <Carousel>
            <Carousel.Item>
                <img
                    className="mobilecarousel"
                    
                    src={childpet}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Protect Your Family</h3>
                    <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={20} /></a>
                    <a className="p-2" href="sms:+1-517-513-4554">
                        <FaSms size={20} />
                    </a>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mobilecarousel"
                    src={meadow}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Enjoy Your Summer Outdoors</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="mobilecarousel"
                    src={lawn}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Every Customer, Every Time</h3>
                    <p>It's not just a promise, it's a guarantee</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

        <div className='desktop '>

        <Carousel className=''>
            <Carousel.Item className=''>
                <img
                    className="carouselimg"
                    
                    src={facebookbanner}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carouseltext h1'>Call Us For a Free Quote</h3>
                    <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={40} /></a>
                    <a className="p-2" href="sms:+1-517-513-4554">
                        <FaSms size={40} />
                    </a>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={birthdayimg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className='carouseltext h1'>Enjoy Your Summer Outdoors</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselimg"
                    src={lawn}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='carouseltext h1'>Every Customer, Every Time</h3>
                    <p className='carouseltext h2'>It's not just a promise, it's a guarantee</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>

    )
}

export default Lead;