import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const BackNavigation = ({ link }) => {


    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <div className="brand-box">
                        <Link className='nav-brand' to='/home'>Portfolio</Link>
                    </div>
                    <Navbar.Collapse>
                        <Nav className="sub-nav">
                            <p className='back'>Retour vers l'accueil</p>
                            <Link to={link} className='nav-link' >
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