
import React, { useEffect } from 'react';
import '../styles/echoes.scss'

const MainVideo = ({ mainVideoSource }) => {



    useEffect(() => {
        let vid = document.getElementById("main-video");
        vid.volume = 0.2;
    })
    return (
        <div className="main-img">
            <video controls autoPlay width="1000" id="main-video" src={mainVideoSource} />




        </div>
    );
};

export default MainVideo;