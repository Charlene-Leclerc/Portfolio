import React from 'react';
import '../styles/about.scss';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { LOGOS_WEB, LOGOS_GAME } from '../models/logos-models';
const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading"><span>A Propos</span> de Moi</h2>


            <div className="about-box">
                <h3>Développeuse Web <span>Full Stack</span></h3>
                <p className='resume'>

                    Je suis passionnée par le développement et je suis également diplômée en développement de jeux vidéo (RNCP 6).<br />
                    Au fil de mon parcours, j'ai acquis une solide expertise dans le domaine du développement...
                </p>
                <Link to='/about-fullstack' className="btn">En savoir plus</Link>
                <div className="icon">
                    {LOGOS_WEB.map((icon, index) => (

                        <Logo name={icon.name} img={icon.img} key={index} />
                    ))}
                </div>
                <br /><br />
                <hr style={{ background: '#ee97ff', color: '#ee97ff', borderColor: '#ee97ff', height: '3px', width: '100%', margin: 'auto' }} />
                <br /><br />
                <h3>Développeuse <span>Jeux Vidéo</span></h3>
                <p className='resume'>Diplomée d'un bac+3 en programmation de jeux vidéo depuis 2021, avec mention, ce cursus m'a
                    permis de découvrir
                    et d'apprendre plusieurs language de programmation,
                    tel que les languages Lua, C, C# (Unity) et C++ (Unreal).
                </p>
                <Link to='/about-videogame' className="btn">En savoir plus</Link>
                <div className="icon">
                    {LOGOS_GAME.map((logo, index) => (
                        <Logo img={logo.img} alt={logo.name} name={logo.name} key={index} />

                    ))}
                </div>
            </div >
        </section >
    );
};

export default About;