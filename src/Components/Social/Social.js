import { Nav } from "react-bootstrap";

import instagram from '../../Resources/Icon/Instagram.png';
import linkedin from '../../Resources/Icon/LinkedIn.png';
import behance from '../../Resources/Icon/Behance.png';
import github from '../../Resources/Icon/GitHub.png';
import artstation from '../../Resources/Icon/Artstation.png';
import sketchfab from '../../Resources/Icon/Sketchfab.png';

export const Social = () => {
    return (
        <Nav>
            <Nav.Link href="https://www.instagram.com/pityafinwe"> <img className='icon-social' src={instagram} alt="Social"/> </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/paolocantoreggi"> <img className='icon-social' src={linkedin} alt="Social"/> </Nav.Link>
            <Nav.Link href="https://www.behance.net/paolocantoreggi"> <img className='icon-social' src={behance} alt="Social"/> </Nav.Link>
            <Nav.Link href="https://github.com/pityaf"> <img className='icon-social' src={github} alt="Social"/> </Nav.Link>
            <Nav.Link href="https://www.artstation.com/pityafinwe"> <img className='icon-social' src={artstation} alt="Social"/> </Nav.Link>
            <Nav.Link href="https://www.sketchfab.com/pityafinwe"> <img className='icon-social' src={sketchfab} alt="Social"/> </Nav.Link>
        </Nav>
    );
}