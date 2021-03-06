import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";
import wnv from '../../images/wnv.png';
import tick from '../../images/ticks.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import flea from '../../images/flea.jpg';
import { IconContext } from "react-icons";


function Facts() {

    return (
        <Container>
            <IconContext.Provider value={{ color: "green" }}>
             <h1 className="border-bottom">Common Pest Facts</h1>
            <div className="d-flex flex-wrap">
           
            
            <Card className="m-auto cardheight" style={{ width: '18rem' }} >
                <Card.Img variant="top" alt="a mosquito" src={wnv} />
                <Card.Body>
                    <Card.Title>Mosquitos</Card.Title>
                    <Card.Text>
                        Mosquitos have been linked to multiple diseases. Stay protected from diseases such as West Nile Virus, Eastern Equine Encephalitis, Zika and more by calling us today.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link className="link-success" href="https://www.michigan.gov/emergingdiseases/mosquitoes" target="_blank">Michigan.Gov Mosquito Info</Card.Link>
                </Card.Body>
                <Card.Body >
                    <h3>Call Us Now @<br /><a className="p-2 link-success" href="tel:+1-517-513-4554">517-513-4554</a></h3>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="m-auto cardheight" >
                <Card.Img variant="top" alt="a tick" src={tick} />
                <Card.Body>
                    <Card.Title>Ticks</Card.Title>
                    <Card.Text>
                        Ticks are known to carry lime disease and are common pests in Michigan. Contact us to see how you can protect your family and pets.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link className="link-success" href="https://www.michigan.gov/mdhhs/-/media/Project/Websites/emergingdiseases/Folder3/Ticks_and_Your_Health_05_19.pdf" target="_blank">Michigan.Gov Tick Info</Card.Link>
                    <Card.Body>
                    <h3>Email Us<br /><a className="p-2 link" href="mailto:robertwetoskey@gmail.com?subject=Quote&body=Please give us your name, address, and phone number and tell us what you would like treatment for. We will get back with you as soon as possible."><AiOutlineMail size={40}/></a></h3>
                </Card.Body>
                    
                </Card.Body>
            </Card>
            

            <Card style={{ width: '18rem' }} className="m-auto cardheight" >
                <Card.Img variant="top" alt="a flea" src={flea} />
                <Card.Body>
                    <Card.Title>Fleas</Card.Title>
                    <Card.Text>
                        Fleaborne diseases include Typhus, tapeworms, Cat Scratch Disease, and even Plague. Call and ask us how we can help keep your pets safe from fleas this season.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                    <Card.Link className="link-success" href="https://www.cdc.gov/fleas/diseases.html" target="_blank">CDC Fleaborne Diseases Info</Card.Link>
                    <Card.Body>
                    <h3>Call Us Now @<br /><a className="p-2 link-success" href="tel:+1-517-513-4554">517-513-4554</a></h3>
                </Card.Body>
                    
                </Card.Body>
            </Card>
            </div>
            </IconContext.Provider>
        </Container>
    )
}

export default Facts;