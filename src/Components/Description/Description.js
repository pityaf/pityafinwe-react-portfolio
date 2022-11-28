import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import { Signature } from '../Signature/Signature'

import './Description.css'

export const Description = ({ info }) => {

    const classes = info.type + ' project-thumbnail mt-4';
    
    return(
        <Container>
            <section className="App-project-description">

                <Container className={classes}>
                    <Row className='h-75 pb-2'>
                        <Col className='align-items-center p-5'>
                            <h2 className='bold'> { info.head } </h2>
                            <h4> { info.subHead } </h4>
                            <br /><br />
                            <h3> Obiettivo </h3>
                            <p> { info.goal }</p>
                        </Col>
                        <Col xs lg="5" className='no-padding d-flex align-items-end justify-content-end pt-4 pe-4'>
                            <img className="mockUp" src={ info.mockUp } alt='project-thumbnail' />
                        </Col>
                    </Row>
                </Container>

                <Container className="p-5">
                    <Row>
                        <Col className="pt-4">
                            <p className="text-center"> <a href={ info.link }> { info.desc } </a> </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/**<h3>Brief</h3>
                            <p> { info.brief }</p>  */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                           {/** <h3>Process</h3>
                            <p> { info.process }</p>  */}
                        </Col>
                    </Row>
                    <Row>
                        <Col className= 'thumbnail no-padding'>
                            <img className="w-100 h-100 img" src={ info.img } alt='project-thumbnail' />
                        </Col>
                    </Row>
                </Container>

                <Signature />

            </section>
        </Container>
    )
}