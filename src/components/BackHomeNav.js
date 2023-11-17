import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const BackNavigation = () => {


    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="sub-nav">
                            <p className='back'>Retour vers l'accueil</p>
                            <Link to='../portfolio/' className='nav-link' >
                                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#ffffff", }} />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default BackNavigation;