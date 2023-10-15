import React, { useState } from 'react';
import MiniatureVideos from '../../components/MiniatureVideos';
import MainVideo from '../../components/MainVideo';
import { HYPERBAWL_VIDEOS } from '../../models/projects-videos';
import { HyperbawlData } from '../../models/projects-models';
import GameTemplate from '../../parents/GameTemplate';

const Hyperbawl = () => {

    const [mainVideoSource, setMainVideoSource] = useState(HYPERBAWL_VIDEOS[0].source);

    const handleThumbnailClick = (videoSource) => {
        setMainVideoSource(videoSource);
    };
    return (

        <section className="main-view" id="main-view">
            <h2 className="heading">Hyperbawl</h2>
            <div className="main-content">
                <MainVideo mainVideoSource={mainVideoSource} />
                <GameTemplate
                    data={HyperbawlData}
                />
            </div>
            <MiniatureVideos videos={HYPERBAWL_VIDEOS} handleThumbnailClick={handleThumbnailClick} />
        </section >

    );
};

export default Hyperbawl;