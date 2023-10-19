import React from 'react';
import ProjectsTemplate from '../parents/ProjectsTemplate';
import { webProjectUrl } from '../config';

const WebData = [
    {
        id: 0,
        img: require('../images/figma.PNG'),
        title: 'Maquette Figma',
        resume: "Importation d'une maquette figma en HTML",
        link: `https://charlene-leclerc.github.io/MaquetteFigma/`
    },
    {
        id: 1,
        img: require('../images/html.PNG'),
        title: 'HTML5/CSS3',
        resume: "Réalisation d'un site complet depuis une maquette photoshop",
        link: `${webProjectUrl}/html`
    },
    {
        id: 2,
        img: require('../images/DogAPI.PNG'),
        title: "Utilisation d'API",
        resume: "Développement d'une application avec l'utilisation de l'API The Dog API",
        link: 'https://charlene-leclerc.github.io/The-Dog-API/'
    },
    {
        id: 3,
        img: require('../images/trinitite.PNG'),
        title: "React Trinitite Portfolio",
        resume: "Réalisation d'un site complet en React JS",
        link: 'https://charlene-leclerc.github.io/trinitite-portfolio/'
    },
];

const WebProjects = () => {



    return (
        <section className="web-projects" id="web-projects">
            <h1 className='heading'>PROJETS <span>WEB</span></h1>
            <ProjectsTemplate projects={WebData} />
        </section>
    );
};

export default WebProjects;