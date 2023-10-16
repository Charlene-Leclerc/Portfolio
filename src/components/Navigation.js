import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/nav.scss';

const Navigation = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link)
    }


    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="brand-box">
                        <Link className='nav-brand' to='home' smooth={true} duration={100}>Portfolio</Link>
                    </div>
                    <Navbar.Collapse>
                        <Nav className="sub-nav">
                            <Link onClick={() => { handleClick('home') }}
                                className={activeLink === 'home' ? 'nav-activ' : 'nav-link'}
                                to='home' smooth={true} duration={100}>Accueil</Link>
                            <Link onClick={() => { handleClick('about') }}
                                className={activeLink === 'about' ? 'nav-activ' : 'nav-link'} to='about' smooth={true} duration={100}>A propos</Link>
                            <Link onClick={() => { handleClick('projects') }}
                                className={activeLink === 'projects' ? 'nav-activ' : 'nav-link'} to='projects' smooth={true} duration={100}>Projets</Link>
                            <Link onClick={() => { handleClick('contact') }}
                                className={activeLink === 'contact' ? 'nav-activ' : 'nav-link'} to='contact' smooth={true} duration={100}>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;