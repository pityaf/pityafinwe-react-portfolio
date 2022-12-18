import './Portfolio.css';

import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Project } from '../Project/Project';
import { Hero } from '../Hero/Hero';
import { Signature } from '../Signature/Signature'


import { ITSProjectInfo } from '../ProjectInfo/ProjectInfo';
import { PersonalProjectInfo } from '../ProjectInfo/ProjectInfo';

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

                    <section id='personal' className='pt-4'>
                        <h2 className='text-center'>Progetti Personali</h2>
                        {
                            PersonalProjectInfo.map(element => <Link to={element.url}><Project info={ element }/></Link>)
                        }
                    </section>

                    <section id='its' className='pt-4'>
                        <h2 className='text-center'>Progetti ITS</h2>
                    {
                        ITSProjectInfo.map(element => <Link to={element.url}><Project info={ element }/></Link>)
                    }
                    </section>

                </Container>
            </section>

            <section className='App-signature pt-5'>
                <Signature />
            </section>
        </Container>
    );
}