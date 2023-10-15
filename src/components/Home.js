import React from 'react';
import "../styles/home.scss";
import avatar from '../images/Charlene_Avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import CV from '../documents/CV_Charlene_Leclerc.pdf'
const Home = () => {

    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={avatar} alt="" />
            </div>
            <div className="home-content">

                <h3>Bonjour :)</h3>
                <h1>Je suis Charlène Leclerc</h1>
                <h3>Je suis <span>Développeuse jeux vidéo</span> et <span>Full-Stack</span> !</h3>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/charl%C3%A8ne-leclerc-67ba0b1ba/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/Charlene-Leclerc">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <a href={CV} download className="btn">Telechargez mon CV</a>
            </div>

        </section>

    );
};

export default Home;