import React from 'react';

import MovingText from 'react-moving-text';

const AboutTemplate = ({ data }) => {

    const PlayTitleEffect = (title) => {
        return (
            <MovingText type="fadeInFromTop" duration="1000ms" delay="0s"
                direction="normal" timing="ease" iteration="1"
                fillMode="none" className="moving-text">
                <h2><span>{title}</span></h2>
            </MovingText>
        );
    }

    const hasObjectif = (data) => {
        if (data.objectifs) {
            return (
                <div className="box">
                    {PlayTitleEffect('Objectifs professionnels')}
                    <MovingText type="popIn" duration="3000ms" delay="0s"
                        direction="normal" timing="ease" iteration="1"
                        fillMode="none" className="moving-text">
                        {data.objectifs}
                    </MovingText>
                </div>
            );
        }

    }
    return (

        <div className="content">
            <div className="box">
                {PlayTitleEffect('Parcours académique')}

                <MovingText type="popIn" duration="3000ms" delay="0s"
                    direction="normal" timing="ease" iteration="1"
                    fillMode="none" className="moving-text">
                    {data.parcours}
                </MovingText>

            </div>
            <div className='box' id='competences'>
                {PlayTitleEffect('Compétences')}
                <MovingText type="popIn" duration="3000ms" delay="0s"
                    direction="normal" timing="ease" iteration="1"
                    fillMode="none" className="moving-text">
                    {data.competences}
                </MovingText>

            </div>
            {hasObjectif(data)}

        </div>

    );
};

export default AboutTemplate;