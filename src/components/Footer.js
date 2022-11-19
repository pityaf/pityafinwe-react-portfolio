import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import "./Footer.css"

export const Footer = () => {
  return(
    <Container className="p-3 mt-3">
        <Row className="text-center">
            <Col className="text-color">
                <p className="no-pad">Designed and develop by</p>
                <p className="no-pad">Paolo Cantoreggi aka Pityafinwe</p>
                <p className="no-pad">©2022 | All rights reserved</p>
            </Col>
        </Row>
    </Container>
  );  
} 