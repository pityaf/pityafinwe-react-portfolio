import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Social } from '../Social/Social'

import './Menu.css';

import logo from '../../Resources/Logos/logo-small-80x60.png';

export const Menu = () => {
    return (
        <Navbar className='w-100'>
            <Container className='w-100'>
                <Nav>
                    <Nav.Link> <Link to='/'> Portfolio </Link> </Nav.Link>
                    <Nav.Link href='mailto:paolo.cantoreggi@gmail.com'>Contact me!</Nav.Link>
                </Nav>
                <div>
                    <img src={ logo } alt='logo' />
                </div>
                <Social />
            </Container>
        </Navbar>
    );
}