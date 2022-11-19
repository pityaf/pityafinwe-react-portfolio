/* bootstrap */
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

/* CSS */
import './Menu.css'

/* ICONS */
import logo from '../resources/logo-small-80x60.png';
import instagram from '../resources/Instagram.png';
import linkedin from '../resources/LinkedIn.png';
import behance from '../resources/Behance.png';
import github from '../resources/GitHub.png';
import artstation from '../resources/Artstation.png';
import sketchfab from '../resources/Sketchfab.png';

import {
    Link
  } from 'react-router-dom';

export const Menu = () => {
    return (
        <Navbar className='w-100'>
            <Container className='w-100 no-pad no-mar'>
                <Nav>
                    <Nav.Link classNane="no-mar"> <Link to="/"> Portfolio </Link> </Nav.Link>
                    <Nav.Link> <Link to="/About"> Su di me </Link> </Nav.Link>
                    <Nav.Link> <Link to="/Contact"> Contatti </Link> </Nav.Link>
                </Nav>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <Nav>
                    <Nav.Link href="https://www.instagram.com/pityafinwe"> <img className='social-icon' src={instagram} alt="Social"/> </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/paolocantoreggi"> <img className='social-icon' src={linkedin} alt="Social"/> </Nav.Link>
                    <Nav.Link href="https://www.behance.net/paolocantoreggi"> <img className='social-icon' src={behance} alt="Social"/> </Nav.Link>
                    <Nav.Link href="https://github.com/pityaf"> <img className='social-icon' src={github} alt="Social"/> </Nav.Link>
                    <Nav.Link href="https://www.artstation.com/pityafinwe"> <img className='social-icon' src={artstation} alt="Social"/> </Nav.Link>
                    <Nav.Link href="https://www.sketchfab.com/pityafinwe"> <img className='social-icon' src={sketchfab} alt="Social"/> </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}