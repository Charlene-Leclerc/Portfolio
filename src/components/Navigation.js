import React, { useState } from 'react';
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/nav.scss';

const Navigation = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link)
    }


    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link eventKey={1} as={Link} href='#home'
                            onClick={() => { handleClick('home') }}
                            className={activeLink === 'home' ? 'nav-activ' : 'nav-link'}
                            to='home'
                            smooth={true}
                            duration={100}>Accueil
                        </ Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='#about'
                            onClick={() => { handleClick('about') }}
                            className={activeLink === 'about' ? 'nav-activ' : 'nav-link'}
                            to='about'
                            smooth={true}
                            duration={100}>A propos
                        </Nav.Link>
                        <Nav.Link eventKey={3} as={Link} href='#projects'
                            onClick={() => { handleClick('projects') }}
                            className={activeLink === 'projects' ? 'nav-activ' : 'nav-link'}
                            to='projects'
                            smooth={true}
                            duration={100}>Projets
                        </ Nav.Link>
                        <Nav.Link eventKey={4} as={Link} href='#contact'
                            onClick={() => { handleClick('contact') }}
                            className={activeLink === 'contact' ? 'nav-activ' : 'nav-link'}
                            to='contact'
                            smooth={true}
                            duration={100}>Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>











        </>
    );
};

export default Navigation;