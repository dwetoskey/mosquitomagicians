import { Card } from "react-bootstrap";
import placeholderimg from '../../images/placeholder.png';
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { Container } from "react-bootstrap";
import wnv from '../../images/wnv.png';
import tick from '../../images/ticks.jpg';
import { AiOutlineMail } from 'react-icons/ai';


function Facts() {

    return (
        <Container>
             <h1 className="border-bottom">Facts</h1>
            <div className="d-flex flex-wrap align-items-center m-auto">
           
            
            <Card className="m-auto h-50" style={{ width: '18rem' }} >
                <Card.Img variant="top" src={wnv} />
                <Card.Body>
                    <Card.Title>Mosquitos</Card.Title>
                    <Card.Text>
                        Mosquitos have been linked to multiple diseases. Be sure to stay informed with the link below and to stay protected from diseases such as West Nile Virus, Eastern Equine Encephalitis, Zika and more.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.michigan.gov/emergingdiseases/mosquitoes" target="_blank">Michigan.Gov</Card.Link>
                </Card.Body>
                <Card.Body>
                    <h3>Call Us Now @<br /><a className="p-2" href="tel:+1-517-513-4554">517-513-4554</a></h3>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="m-auto" >
                <Card.Img variant="top" src={tick} />
                <Card.Body>
                    <Card.Title>Ticks</Card.Title>
                    <Card.Text>
                        Ticks are known to carry lime disease and are common pests in Michigan. Contact us to see how you can protect your family and pets.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://www.michigan.gov/mdhhs/-/media/Project/Websites/emergingdiseases/Folder3/Ticks_and_Your_Health_05_19.pdf" target="_blank">Michigan.Gov Tick Info</Card.Link>
                    <Card.Body>
                    <h3>Email Us<br /><a className="p-2" href="mailto:robertwetoskey@gmail.com?subject=Quote&body=Please give us your name, address, and phone number and tell us what you would like treatment for."><AiOutlineMail size={40}/></a></h3>
                </Card.Body>
                    
                </Card.Body>
            </Card>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholderimg} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> */}
            </div>
        </Container>
    )
}

export default Facts;