import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './header.css';
import { BsFacebook, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaSms } from 'react-icons/fa';

function Header() {

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Mosquito Magicians</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Reviews</Nav.Link>
                    <Nav.Link href="#pricing">Quotes</Nav.Link>
                </Nav>
                <Container className="justify-content-right">

                    <img className="logo" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <a className="icons p-2" href="https://www.facebook.com/profile.php?id=100065590235649" target="_blank">
                        <BsFacebook size={40} />
                    </a>
                    <a className="p-2" href="sms:+1-517-513-4554">
                        <FaSms size={40} />
                    </a>
                    <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={40} /></a>
                </Container>
            </Container>
        </Navbar>
    )
}

export default Header;