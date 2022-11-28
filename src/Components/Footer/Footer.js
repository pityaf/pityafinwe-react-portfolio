import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <Container className='p-3 mt-3'>
            <Row>
                <Col>
                    <p className="no-padding text-center">
                        Designed and develop in <a href='https://reactjs.org/'>React</a> by <br /> 
                        <strong>Paolo Cantoreggi</strong> aka <strong>Pityafinwe</strong> <br /> 
                        <strong>©pityafinwe 2022 | All rights reserved</strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}