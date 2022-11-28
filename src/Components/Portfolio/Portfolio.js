import './Portfolio.css';

import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Project } from '../Project/Project';
import { Hero } from '../Hero/Hero';
import { Signature } from '../Signature/Signature'


import { projectInfo } from '../ProjectInfo/ProjectInfo';

export const Portfolio = () => {
    return (
        <Container>
            <section className="App-hero">
                <Container>
                    <Hero />
                </Container>
            </section>
            
            <section className="App-projects">
                <Container>
                    {/** Personal Brand */}
                    <Link to={projectInfo[0].url}><Project info={ projectInfo[0] }/></Link>
                    {/** Paolo Cantoreggi Portfolio */}
                    <Link to={projectInfo[1].url}><Project info={ projectInfo[1] }/></Link>
                    {/** .Comanda */}
                    {/*<Link to={projectInfo[2].url}><Project info={ projectInfo[2] }/></Link>*/}
                    {/** First portfolio project codecademy */}
                    <Link to={projectInfo[3].url}><Project info={ projectInfo[3] }/></Link>
                    {/** 3D tower scene */}
                    <Link to={projectInfo[4].url}><Project info={ projectInfo[4] }/></Link>
                </Container>
            </section>

            <section className='App-signature pt-5'>
                <Signature />
            </section>
        </Container>
    );
}