import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import './Hero.css'

export const Hero = () => {
    return (
        <Container className='pt-4'>
            <Row>
                <Col><h2>Hi! I'm</h2></Col>
            </Row>
            <Row>
                <Col className="col-md-auto yellow-box mt-1 mb-1 me-1"><h1>Paolo</h1></Col><Col className="col-md-auto green-box mt-1 mb-1 mr-1 ms-1"><h1>Cantoreggi</h1></Col>
            </Row>
            <Row>
                <Col><h2>Front-End Developer</h2></Col>
            </Row>
            <Row>
                <Col className='pt-3'>
                    <p>Studente di Digital Communication in ITS INCOM in corso di diploma con ottime capacità analitiche e di progettazione 
                    maturate durante le esperienze di volontariato, di lavoro pregresse e durante il corso durante il quale ho potuto migliorare 
                    le mie abilità di designer e di sviluppatore front-end. 
                    Nel mio tempo libero modello in 3D in campo artistico e commerciale. <br />
                    Attivo in diverse comunità online con lo speudonimo Pityafinwe.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}