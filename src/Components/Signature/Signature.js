import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { Social } from '../Social/Social'

import './Signature.css';

import signature from '../../Resources/Logos/logo-signature-195.png';

export const Signature = () => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <img className='signature' src={ signature } alt='signature' />
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Social />
                </Col>
            </Row>
        </Container>
    );
}