import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./About.css"

export const About = () => {
    return(
        <Container className="full-page">
            <Row className="full align-content-center">
                <Col className="text-center">
                    <h1 className="m-5">Ciao!</h1>
                    <p>
                        Studente di Digital Communication ITS INCOM in corso di diploma con ottime capacità analitiche e di progettazione maturate durante
                        le esperienze di volontariato, di lavoro pregresse e durante il corso durante il quale ho potuto migliorare le mie abilità di designer e
                        di sviluppatore front-end. Nel mio tempo libero modello in 3D in campo artistico.
                        Attivo in diverse comunità online con lo speudonimo Pityafinwe.
                    </p>
                </Col>
            </Row>
        </Container>
    );
} 