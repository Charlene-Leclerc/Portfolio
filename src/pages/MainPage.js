import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const MainPage = () => {
    return (
        <>
            <Navigation />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default MainPage;