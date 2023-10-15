import React from 'react';


const MiniatureVideos = ({ videos, handleThumbnailClick }) => {
    return (
        <div className="container">
            {videos.map(video => (
                <div className="img-box" key={video.id}>
                    <video
                        controls={false}
                        width="250"
                        src={video.source}
                        alt={video.title}
                        onClick={() => handleThumbnailClick(video.source)}
                    />

                </div >
            ))}

        </div>
    );
};

export default MiniatureVideos;