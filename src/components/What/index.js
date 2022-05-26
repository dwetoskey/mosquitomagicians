import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { FaMagic } from "react-icons/fa";;

function What() {

    return (

        <Container className="whatcontainer fluid">
            <div className="whatbg"></div>
            <Row>
                <Col>
                <div className="d-flex justify-content-center align-items-center flex-column bg-transparent">
                    <h1 className="border-bottom border-dark">What We Do</h1>
                    <br />
                    <img className="infographicmobile mobile" src={require("../../images/infographic.png")} />
                    <img className="infographicdesktop desktop" src={require("../../images/infographic.png")} />
                    </div>
                    <div className="d-flex justify-content-left flex-column whatbullets m-auto bg-transparent whattext">
                        <h4 className=""><FaMagic></FaMagic> We provide premium treatments for your property to protect your family and pets from over 70 different pests.</h4>
                        <br />
                        <h4><FaMagic></FaMagic> We offer barrier sprays for the perimeter of your home to prevent crawliing insects from getting inside.</h4>
                        <br />
                        <h4><FaMagic></FaMagic> Mosquito Magicians guarantees all of our services, so if there is ever an issue after a visit we will gladly retreat at no charge.</h4>
                        <br />
                        <h4><FaMagic></FaMagic> Safety is always a top priority, and we don't take it lightly. We will discuss all of the treatments and answer whatever concerns you may have.</h4>
                        <br />
                        <h4><FaMagic></FaMagic> When we say "whatever it takes" that's what we mean. We will do everything in our power to make every customer happy. We know that without you, we are nothing.</h4>
                        <br />
                    </div>
                    {/* <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Premium Treatments</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5>We provide premium treatments to protect your property from over 70 pests including mosquitoes, fleas, ticks, ants, spiders, and more.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Barrier Sprays</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5>We offer barrier sprays for the perimiter of your home to prevent crawling insects from getting inside.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Service Guarantee</h3></Accordion.Header>
                    <Accordion.Body>
                        <h5>We guarantee all of our services, so if there is ever an issue after a treament we will gladly retreat at no charge.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>Whatever It Takes</h3></Accordion.Header>
                    <Accordion.Body>
                       <h5> We will do everything in our power to make every customer happy. We know that without you, we are nothing.</h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}

                </Col>
            </Row>
        </Container>
    )
}

export default What;