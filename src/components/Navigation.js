import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
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
                            <Nav.Link href="/#home" >Accueil</Nav.Link>
                            <Nav.Link href="/#about">A Propos</Nav.Link>
                            {/*<Nav.Link href="/#services">Services</Nav.Link>*/}
                            <Nav.Link href="/#projects">Projets</Nav.Link>
                            <Nav.Link href="/#contact"> Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;