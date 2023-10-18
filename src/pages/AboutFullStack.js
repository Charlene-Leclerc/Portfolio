import React from 'react';
import { AboutData } from '../models/AboutData';
import AboutTemplate from '../parents/AboutTemplate';
import BackHomeNav from '../components/BackHomeNav';

const AboutFullStack = () => {
    return (
        <>
            <BackHomeNav back_section={{ back_section: 'about' }} />
            <section className='about-fullstack' id='about-fullstack'>
                <h1>Formation Développeur <span>Full-Stack</span></h1>
                <AboutTemplate data={AboutData} />

            </section >
        </>

    );
};

export default AboutFullStack;