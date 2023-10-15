import React from 'react';
import { GameData } from '../models/AboutData';
import AboutTemplate from '../parents/AboutTemplate';

const AboutGame = () => {
    return (
        <section className='about-videogame' id='about-videogame'>
            <h1>Formation Développeur <span>Jeux Vidéo</span></h1>
            <AboutTemplate data={GameData} />
        </section >
    );
};

export default AboutGame;