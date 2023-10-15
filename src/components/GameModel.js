import React from 'react';

const GameDescription = () => {
    return (

        <div className="description">
            <h1><span>Projet étudiant</span></h1>
            <h2>1ère année</h2>
            <ul>
                <li><span>Durée de développement</span> : 3 mois</li>
                <li><span>Equipe</span> : 4 programmeurs, 4 graphistes</li>
                <li><span>Language</span> : C</li><br /><br />
            </ul>
            <h1><span>Résumé</span></h1>
            <p>Avancez dans un monde rempli d'ennemi, visitez, construisez les bâtiment nécessaire à votre progression
                pour
                améliorer votre équipement et être prêt à affronter l'ultime boss !
            </p><br /><br />

            <h1><span>Ma part de travail</span></h1>
            <ul>
                <li className='sub-li'>Déplacements, animations, skills, attaque, récolte, son.</li>
                <li className='sub-li'>Une partie du système de loot et de son interface</li>
            </ul>


        </div>
    );
}
const GameModel = (props) => {
    return (
        <section className="main-view" id="main-view">
            <h2 className="heading">{props.title}</h2>
            <div className="main-content">
                <MainVideo mainVideoSource={mainVideoSource} />
                <GameDescription />
            </div>
            <MiniatureVideos videos={ECHOES_VIDEOS} handleThumbnailClick={handleThumbnailClick} />
        </section>
    );
};

export default GameModel;