import './Project.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export const Project = ({ info }) => {

    const classes = info.type + ' project-thumbnail mt-3';

    return (
        <Container className={classes}>
            <Row className='w-100 pt-2'>
                <Col className='d-flex justify-content-end align-items-center pt-2 '>
                    <p>{ info.date } | { info.name }</p>
                </Col>
            </Row>
            <Row className='h-75'>
                <Col xs lg="3" className='no-padding d-flex align-items-end ps-2 pb-4'>
                    <img className="mockUp" src={ info.mockUp } alt='project-thumbnail' />
                </Col>
                <Col className='align-items-center pt-5'>
                    <h2 className='bold'> { info.head } </h2>
                    <h3> { info.subHead } </h3>
                </Col>
            </Row>
        </Container>
    );
}