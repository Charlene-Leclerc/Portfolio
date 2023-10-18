import React from 'react';
import { GameData } from '../models/AboutData';
import AboutTemplate from '../parents/AboutTemplate';
import BackHomeNav from '../components/BackHomeNav';
const AboutGame = () => {
    return (
        <>
            <BackHomeNav />
            <section className='about-videogame' id='about-videogame'>
                <h1>Formation Développeur <span>Jeux Vidéo</span></h1>
                <AboutTemplate data={GameData} />
            </section >
        </>
    );
};

export default AboutGame;