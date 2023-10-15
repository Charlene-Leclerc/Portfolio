import MovingText from 'react-moving-text';

export const AboutData =
{

    parcours: <p>Après avoir obtenu mon diplôme en développement de jeux vidéo, j'ai décidé d'élargir mes <span>compétences</span> en rejoignant une formation de développeur<span>
        Web Full Stack</span>, avec l'école 3W Academy, actuellement en cours. Cette expérience m'a permis d'approfondir mes connaissances en <span>programmation</span> et d'explorer de nouvelles <span>technologies</span>."
    </p>,
    competences: <>
        <p>Je maîtrise plusieurs langages et technologies liées au développement web, notamment :</p>,
        <ul>
            <li><span className='underline'>HTML</span> : Je suis à l'aise avec la création de structures de pages web en utilisant HTML.</li>
            <li><span className='underline'>CSS / SASS</span> : J'ai une bonne connaissance du langage de style <span>CSS</span> et j'utilise <span>Sass</span> pour améliorer mon <span>workflow</span>.</li>
            <li><span className='underline'>JAVASCRIPT</span> : Je suis compétente en <span>JavaScript</span>, ce qui me permet de créer des sites web interactifs et dynamiques.</li>
            <li><span className='underline'>REACT JS</span> : J'ai une bonne connaissance du framework <span>React</span>, que j'utilise pour construire des applications web modernes, et je continue continuellement à me former dessus.</li>
            <li><span className='underline'>NODE JS</span> : Actuellement, je suis en apprentissage de Node.js, ce qui me permettra de développer la partie <span>backend</span> de mes applications.</li>
        </ul>
    </>,

    objectifs: <p> Je suis actuellement à la recherche d'une <span>entreprise</span> pour réaliser une <span>alternance</span> dans le cadre de ma formation en développement web full stack.<br /><br />
        Mon objectif est de mettre en pratique les compétences que j'ai acquises et de continuer à me développer professionnellement dans un environnement stimulant.<br /><br />
        Je suis passionnée par le développement web et je souhaite intégrer une entreprise qui offre un environnement propice à l'<span>apprentissage</span> et à la <span>collaboration</span>.<br /><br />
        J'aspire à travailler aux côtés de professionnels expérimentés pour approfondir mes connaissances et acquérir une expérience concrète dans le domaine.<br />
        Je suis à la recherche d'une entreprise qui valorise l'<span>innovation</span>, la <span>créativité</span> et l'<span>esprit d'équipe</span>.<br /><br />
        Je suis prête à relever des <span>défis</span> et à m'investir pleinement dans des projets ambitieux.
        Mon objectif est de contribuer activement à la <span>réussite</span> de l'entreprise tout en continuant à <span>apprendre</span> et
        à grandir en tant que développeur.<br /><br />
        Si vous êtes une entreprise à la recherche d'un alternant <span>motivé</span> et <span>passionné</span> par le développement web,
        je serais ravie d'échanger avec vous pour discuter de la possibilité d'une collaboration.
        N'hésitez pas à me <span>contacter</span> pour toute opportunité d'alternance ou pour en savoir plus sur mon parcours et mes compétences.</p>,

};


export const GameData =
{
    parcours:
        <p>
            Je suis passionnée par les jeux vidéo depuis mon plus jeune âge, et j'ai décidé de suivre une formation  spécialisée dans le développement de jeux vidéo, de 2017 à 2021.
            Ayant obtenu mon diplôme RNCP 6 (Bac+3/4) dans le domaine, cette formation m'as permis d'approfondir mes connaissances en programmation et en conception de jeux.
            J'ai également appris à travailler en équipe et à gérer des projets de jeux vidéo de A à Z.
        </p>,

    competences: <>
        <p><span>Programmation </span>: Je maîtrise plusieurs langages de programmation couramment utilisés dans l'industrie du jeu, principalement : </p>,

        <ul>
            <li><span className='underline'>Unity</span> :  Maîtrise du moteur de jeu Unity et du language C#.</li>
            <li><span className='underline'>UE4 / UE5</span> :  Maîtrise du moteur Unreal Engine 4 et 5 et du language C++ / Blueprint.</li>
        </ul>
    </>,
};


export const AnimatedText = ({ text, type }) => {

    return (
        <div className="box">
            <MovingText
                type={type}
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
                className="moving-text">
                {text}

            </MovingText>
        </div>
    );
};