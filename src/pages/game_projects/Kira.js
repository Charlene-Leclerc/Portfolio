import React, { useState } from 'react';
import { KIRA_VIDEOS } from '../../models/projects-videos';
import MainVideo from '../../components/MainVideo';
import MiniatureVideos from '../../components/MiniatureVideos';
import { KiraData } from '../../models/projects-models';
import GameTemplate from '../../parents/GameTemplate';

const Kira = () => {

    const [mainVideoSource, setMainVideoSource] = useState(KIRA_VIDEOS[0].source);

    const handleThumbnailClick = (videoSource) => {
        setMainVideoSource(videoSource);
    };
    return (
        <>
            <section className="main-view" id="main-view">
                <h2 className="heading">Le monde de Kira</h2>
                <div className="main-content">
                    <MainVideo mainVideoSource={mainVideoSource} />
                    <GameTemplate data={KiraData} />
                </div>
                <MiniatureVideos videos={KIRA_VIDEOS} handleThumbnailClick={handleThumbnailClick} />
            </section>

        </>
    );
};

export default Kira;