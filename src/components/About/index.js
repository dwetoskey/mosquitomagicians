import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { Container } from "react-bootstrap";
import { IconContext } from "react-icons";


function About() {

    return (
        <Container>
            <IconContext.Provider value={{ color: "green" }}>
        <Card className="mobile">
            <Card.Header className="h1">Why Us?</Card.Header>
            <Card.Body>
                <Card.Title><h3><u>Because You're Not Just a Number</u></h3></Card.Title>
                <Card.Text className="h5">
                    After managing at a company that treated their customer like they were a number on a report,
                    I knew it was time to start my own business.
                    In 2021, after over 10 years with this company, I jumped ship and started Mosquito Magicians.
                    We treat every customer like the gem that they are with only one goal in mind; complete customer satisfaction. 
                    If you're tired of being treated like a number, give us a call.
                </Card.Text>
                <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={30} /></a>
            </Card.Body>
        </Card>
        <Card className="desktop">
        <Card.Header className="h1">Why Us?</Card.Header>
        <Card.Body>
            <Card.Title><h3><u>Because You're Not Just a Number</u></h3></Card.Title>
            <Card.Text className="h5">
                After managing at a company that treated their customer like they were a number on a report,
                I knew it was time to start my own business.
                In 2021, after over 10 years with this company, I jumped ship and started Mosquito Magicians.
                We treat every customer like the gem that they are with only one goal in mind; complete customer satisfaction. 
                If you're tired of being treated like a number, give us a call.
            </Card.Text>
            <a className="p-2" href="tel:+1-517-513-4554"><BsFillTelephoneOutboundFill size={30} /></a>
        </Card.Body>
    </Card>
    </IconContext.Provider>
    </Container>
    )
}

export default About;