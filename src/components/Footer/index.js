import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { BsFacebook, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaSms } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Footer() {

    return (
        <Container className=''>
            <Carousel controls={false} indicators={false} className='bg-transparent footercarousel desktop'>
                <Carousel.Item>
                    <img className="footerlogolt" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <h1 className='text-light'>Contact Us for A Free Quote</h1>
                    <IconContext.Provider value={{ color: "white" }}>
                        <a className="icons p-2" href="https://www.facebook.com/profile.php?id=100065590235649" target="_blank">
                            <BsFacebook size={40} />
                        </a>
                        <a className="p-2" href="sms:+1-517-513-4554">
                            <FaSms size={40} />
                        </a>
                        <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={40} /></a>
                        <a className="p-2" href="mailto:robertwetoskey@gmail.com?subject=Quote&body=Please give us your name, address, and phone number and tell us what you would like treatment for. We will get back with you as soon as possible.">
                            <AiOutlineMail size={40} />
                        </a>
                        <img className="footerlogort" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    </IconContext.Provider>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="footerlogolt" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <IconContext.Provider value={{ color: "white" }}>
                        <a className="icons p-2 link-light" href="https://g.page/r/Cfs78SCgUABGEAI/review" target="_blank">
                            <h1 className=''>Leave Us A Review</h1>
                        </a>
                        <img className="footerlogort" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    </IconContext.Provider>
                </Carousel.Item>

            </Carousel>

            <Carousel controls={false} indicators={false} className='bg-transparent footercarouselmobile mobile'>
                <Carousel.Item>
                    <img className="mobilefooterlogolt" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <h3 className='text-light'>Contact Us for A Free Quote</h3>
                    <IconContext.Provider value={{ color: "white" }}>
                        <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={20} /></a>
                        <a className="icons p-2" href="https://www.facebook.com/profile.php?id=100065590235649" target="_blank">
                            <BsFacebook size={20} />
                        </a>
                        <a className="p-2" href="sms:+1-517-513-4554">
                            <FaSms size={20} />
                        </a>

                        <a className="p-2" href="mailto:robertwetoskey@gmail.com?subject=Quote&body=Please give us your name, address, and phone number and tell us what you would like treatment for. We will get back with you as soon as possible.">
                            <AiOutlineMail size={20} />
                        </a>
                        <img className="mobilefooterlogort" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    </IconContext.Provider>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="mobilefooterlogolt" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <IconContext.Provider value={{ color: "white" }}>
                        <a className="icons p-2 link-light" href="https://g.page/r/Cfs78SCgUABGEAI/review" target="_blank">
                            <h1 className=''>Review Us</h1>
                        </a>
                        <img className="mobilefooterlogort" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    </IconContext.Provider>
                </Carousel.Item>

            </Carousel>
        </Container>

    )
}

export default Footer;