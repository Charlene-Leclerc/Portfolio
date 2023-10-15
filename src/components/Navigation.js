import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import '../styles/nav.scss';

const Navigation = () => {

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="brand-box">
                        <Navbar.Brand href="#home" className='navbar-brand'>PORTFOLIO</Navbar.Brand>
                    </div>
                    <Navbar.Collapse>
                        <Nav className="sub-nav">
                            <Link className='nav-link' to='home' smooth={true} duration={100}>Accueil</Link>
                            <Link className='nav-link' to='about' smooth={true} duration={100}>A propos</Link>
                            <Link className='nav-link' to='projects' smooth={true} duration={100}>Projets</Link>
                            <Link className='nav-link' to='contact' smooth={true} duration={100}>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;