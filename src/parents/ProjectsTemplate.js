import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/projects.scss';
const ProjectsTemplate = ({ projects }) => {
    return (
        <div className="container">
            <div className="student">
                {projects.map(project => (

                    <div className="box" key={project.id}>
                        <img src={project.img} alt="" />

                        <div className="layer">

                            <h4>{project.title}</h4>
                            <p>{project.resume}</p>
                            <Link to={`${project.link}`} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='fa-icon' /></Link>
                            {console.log(project.link)}
                        </div>
                    </div>


                ))}
            </div>
            <div className="personal">

            </div>
        </div>
    );
};

export default ProjectsTemplate;