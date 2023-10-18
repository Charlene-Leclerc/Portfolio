import React from 'react';
import { GamesData } from '../../models/projects-models';
import ProjectsTemplate from '../../parents/ProjectsTemplate'

const GameProjects = () => {

    return (

        <section className="game_projects" id="game_projects">
            <h1 className='heading'>PROJETS <span>JEUX VIDEO</span></h1>
            <ProjectsTemplate projects={GamesData} />
        </section>

    );
};

export default GameProjects;