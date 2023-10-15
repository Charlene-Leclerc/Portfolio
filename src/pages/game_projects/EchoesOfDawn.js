
import React, { useState } from 'react';
import MiniatureVideos from '../../components/MiniatureVideos';
import MainVideo from '../../components/MainVideo';
import { ECHOES_VIDEOS } from '../../models/projects-videos';
import { EchoesData } from '../../models/projects-models';
import GameTemplate from '../../parents/GameTemplate';

const EchoesOfDawn = () => {
    const [mainVideoSource, setMainVideoSource] = useState(ECHOES_VIDEOS[0].source);


    const handleThumbnailClick = (videoSource) => {
        setMainVideoSource(videoSource);
    };

    return (
        <section className="main-view" id="main-view">
            <h2 className="heading">Echoes Of Dawn</h2>
            <div className="main-content">
                <MainVideo mainVideoSource={mainVideoSource} />
                <GameTemplate data={EchoesData} />
            </div >
            <MiniatureVideos videos={ECHOES_VIDEOS} handleThumbnailClick={handleThumbnailClick} />
        </section>

    );
};

export default EchoesOfDawn;