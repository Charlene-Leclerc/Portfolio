import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
//import { useMediaQuery } from 'react-responsive';

const MainPage = () => {

    /*const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");
    const isLargeDevice = useMediaQuery("only screen and (min-width : 993px) and (max-width : 1200px)");
    const isExtraLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");*/

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