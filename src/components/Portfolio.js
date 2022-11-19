/* bootstrap */
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

/* CSS */
import "./Portfolio.css"

export const Portfolio = () => {
    return(
        <Container>
            <Row className="works-hello align-content-center">
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center"> Photo </div>
                </Col>
                <Col xs={12} md={8} className="d-flex flex-column justify-content-center">
                    <h1>Ciao!</h1>
                    <p>
                        Sono Paolo, uno sviluppatore Front-End e designer! <br></br>
                        Nel tempo libero mi diletto nella modellazione 3D e sono conosciuto sul web con lo pseudonimo Pityafinwe! 
                    </p>
                </Col>
            </Row>
            <Row className="mb-5 text-center">
{/*              <Col md={{ span: 6, offset: 3 }} className="p-2 border radius d-flex justify-content-center">
                    <button id='all' className="mx-2 button active">Tutto</button>
                    <button id="web" className="mx-2 button">Design</button>
                    <button id="fe" className="mx-2 button">Front-End</button>
                    <button id="art" className="mx-2 button">3D</button>
                </Col>
                */}
                <h2 className="mt-3">Questi sono i miei ultimi progetti!</h2>
            </Row>
            <Row className="row-cols-2 row-cols-lg-3 g-4 g-lg-4">
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
                <Col>
                    <div className="col-4 border thumbnail-project radius text-center">Project thumbnail</div>
                </Col>
            </Row>
        </Container>
    );
}