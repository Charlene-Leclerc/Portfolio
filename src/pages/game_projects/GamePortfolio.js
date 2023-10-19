import React, { useState } from 'react';
import MiniatureVideos from '../../components/MiniatureVideos';
import MainVideo from '../../components/MainVideo';
import GameTemplate from '../../parents/GameTemplate';
import BackNavigation from '../../components/BackHomeNav';
import { baseUrl } from '../../config';

const GamePortfolio = ({ videos, TemplateData }) => {
    const [mainVideoSource, setMainVideoSource] = useState(videos[0].source);


    const handleThumbnailClick = (videoSource) => {
        setMainVideoSource(videoSource);
    };

    return (
        <>
            <BackNavigation link={`${baseUrl}/game_projects`} />

            <section className="main-view" id="main-view">
                <h2 className="heading">Echoes Of Dawn</h2>
                <div className="main-content">
                    <MainVideo mainVideoSource={mainVideoSource} />
                    <GameTemplate data={TemplateData} />
                </div >
                <MiniatureVideos videos={videos} handleThumbnailClick={handleThumbnailClick} />
            </section>
        </>
    );
};

export default GamePortfolio;