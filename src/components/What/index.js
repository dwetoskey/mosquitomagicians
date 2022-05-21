import { Accordion } from "react-bootstrap";
import { Container } from "react-bootstrap";

function What() {

    return (
        <Container>
            <h1 className="border-bottom">What We Do</h1>
            <Accordion defaultActiveKey="0">
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
            </Accordion>
        </Container>
    )
}

export default What;