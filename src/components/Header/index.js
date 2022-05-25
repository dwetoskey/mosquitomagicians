import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './header.css';
import { BsFacebook, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaSms } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Header() {

    return (
        <Navbar bg="light" variant="light" className="d-flex flex-wrap">
            <Container>
            <IconContext.Provider value={{ color: "green" }}>
                <Navbar.Brand href="#home">Mosquito Magicians</Navbar.Brand>
                <Container className="justify-content-right">

                    <img className="logo" alt="mosquito magicians banner and mosquito" src={require('../../images/Mosquito Magicians-logos__transparent 2.png')} />
                    <a className="icons p-2" href="https://www.facebook.com/profile.php?id=100065590235649" target="_blank">
                        <BsFacebook size={40} />
                    </a>
                    <a className="p-2" href="sms:+1-517-513-4554">
                        <FaSms size={40} />
                    </a>
                    <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={40} /></a>
                </Container>
                </IconContext.Provider>
            </Container>
            
        </Navbar>
    )
}

export default Header;