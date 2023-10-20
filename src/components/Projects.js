import React from 'react';
import '../styles/projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { baseUrl } from '../config';

const Projects = () => {

    return (


        <section className="projects">
            <h2 className="heading">Mes <span>Projets</span></h2>
            <div className="all">
                <div className="games">
                    <h3>Projets <span>jeux vidéos</span></h3>
                    <p>Cliquez sur l'icone
                        <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='fa-icon' /></span>
                        pour découvrir mes projets jeux vidéo !</p>
                    <Link to={`${baseUrl}/game_projects`} className='nav-link'><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='fa-icon icon btn' /></Link>
                </div>
                <div className="web">
                    <h3>Projets <span>Web</span></h3>
                    <p>Cliquez sur l'icone
                        <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='fa-icon' /></span> pour découvrir mes projets web !</p>
                    <Link to={`${baseUrl}/web_projects`} className='nav-link'><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='fa-icon icon btn' /></Link>
                </div>
            </div>

        </section>
    );

};

export default Projects;