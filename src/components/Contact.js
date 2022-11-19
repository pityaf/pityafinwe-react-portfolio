import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Contact.css"

export const Contact = () => {
    return(
        <Container className="full-page">
            <Row className="full align-content-center">
                <Col className="text-center">
                    <h1 className="m-5">Contatti</h1>
                    <p>
                        Anche se sono bravo con i segnali di fumo,
                        i sono metodi più semplici per rimanere in contatto.
                    </p>
                    <button className="button-c m-5"><a className="contact" href="mailto:paolo.cantoreggi@gmail.com"> Scrivimi! </a></button>
                </Col>
            </Row>
        </Container>
    );
}