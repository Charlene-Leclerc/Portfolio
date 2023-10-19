import React from 'react';
import '../../styles/game-pages-pres.scss';
import BackNavigation from '../../components/BackHomeNav';
import { baseUrl } from '../../config';

const images = {
    gif: require('../../images/europmadness/europmadnessgif.gif'),
    map: require('../../images/europmadness/europmadnessmap.png'),
    general: require('../../images/europmadness/europmadnessgeneral.png'),
    power: require("../../images/europmadness/europmadnesspower.png")

}
const linksID = {
    video: 'video',
    first_link: 'link-01',
    second_link: 'link-02',
    third_link: 'link-03'
}
function handleClick(e) {
    const mainView = document.getElementById("view-img");
    mainView.src = e.target.src;
};

export const Boxes = ({ linkId, imgId, img_src }) => {
    return (

        <div className="img-box">
            <button id={linkId} onClick={handleClick}>
                <img id={`${imgId}`} src={`${img_src}`} alt="" width="1276" height="717" />
            </button>

        </div>

    );
}
const EuropMadness = () => {

    return (
        <>
            <BackNavigation link={`${baseUrl}/game_projects`} />
            <div className='main-view'>
                <h2 className="heading">Europ Madness</h2>
                <div className="main-content">
                    <div className="main-img">
                        <img id="view-img" src={images.gif} alt="" width="1276" height="717" />
                    </div>
                    <div className="description">
                        <h1><span>Projet étudiant</span>, classe préparatoire</h1>
                        <h2><span>Durée de développement</span> : 3mois</h2>
                        <h2><span>Equipe</span> : 3 programmeurs, 3 graphistes</h2>
                        <h2><span>Language</span> : LUA</h2><br /><br />
                        <h1><span>Résumé</span></h1>
                        <p>Combattez des hordes d'ennemis de plus en plus forte, placez et améliroez
                            vos tourelles stratégiquement, utilisez vos sorts et n'hesitez pas à jouez avec
                            le temps pour prendre les meilleurs décisisons!
                        </p><br /><br />
                        <h1><span>Ma part de travail</span></h1>
                        <ul>
                            <li className='sub-li'>Intégration d'assets et effets sonores.</li>
                            <li className='sub-li'> Intégration et gestion de l'interface (hors dialogue).</li>
                            <li className='sub-li'>Système de tourelle (placement, comportement, tir, upgrade)</li>
                            <li className='sub-li'> Système de monnaie.</li>
                        </ul>
                        <br />

                    </div>
                </div>
            </div>
            <div className="container">
                <Boxes linkId={linksID.video} imgId="gif" img_src={images.gif} />
                <Boxes linkId={linksID.first_link} imgId="img-01" img_src={images.map} />
                <Boxes linkId={linksID.second_link} imgId="img-02" img_src={images.general} />
                <Boxes linkId={linksID.third_link} imgId="img-03" img_src={images.power} />
            </div>
        </>
    );
};

export default EuropMadness;