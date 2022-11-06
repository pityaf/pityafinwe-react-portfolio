import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
    Link
  } from 'react-router-dom';

export const Menu = () => {
    return (
            <Navbar>
                <Container className='d-flex justify-content-between'>
                    <Row>
                        <Col>
                            <Nav className="me-auto">
                                <Nav.Item> <Nav.Link> <Link to="/">Works</Link> </Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link> <Link to="/About">About</Link> </Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link> <Link to="/Contact">Contact</Link> </Nav.Link> </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <Nav className="me-auto">
                                <Nav.Item> LOGO </Nav.Item>
                            </Nav>
                        </Col>
                        <Col>
                            <Nav className="me-auto">
                                <Nav.Item> <Nav.Link> <Link to="/">Works</Link> </Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link> <Link to="/About">About</Link> </Nav.Link> </Nav.Item>
                                <Nav.Item> <Nav.Link> <Link to="/Contact">Contact</Link> </Nav.Link> </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
    );
}