
export const GamesData = [
    {
        id: 0,
        img: require('../images/europmadness/europmadnessmap.png'),
        title: 'EUROP MADNESS',
        resume: "Combattez des hordes d'ennemis de plus en plus forte, placez et améliroez vos tourelles stratégiquement, utilisez vos sorts et n'hesitez pas à jouez avec le temps pour prendre les meilleurs décisisons!",
        link: '/game_projects/europ-madness'
    },
    {
        id: 1,
        img: require('../images/echoesofdawn/menuechoes.png'),
        title: 'ECHOES OF DAWN',
        resume: "Avancez dans un monde rempl d'ennemi, visitez, construisez les bâtiments nécessaire à votre progression pour améliorer votre équipement et affronter l'ultime boss!",
        link: '/game_projects/echoes-of-dawn'
    },
    {
        id: 2,
        img: require('../images/hyperbawl/HyperbawIMG.png'),
        title: 'HYPERBAWL',
        resume: "Prenez part à un match d'hyperbawl, en multijoueur 3vs3, et remportez la victoire !",
        link: '/game_projects/hyperbawl'
    },
    {
        id: 3,
        img: require('../images/kira/kiraMenu.png'),
        title: 'LE MONDE DE KIRA',
        resume: "Explorez les lieux, discutez avec d'autres amis chats, accomplissez des quêtes et partez combattre vos pires ennemis lors de vos périple.",
        link: '/game_projects/le-monde-de-kira'
    },
];

export const EuropMadnessData = {

    title: "Europ Madness",
    years: "classe préparatoire",
    team: "3 programmeurs et 3 infographistes",
    langage: "LUA",
    resume:
        <p>Combattez des hordes d'ennemis de plus en plus forte, placez et améliroez
            vos tourelles stratégiquement, utilisez vos sorts et n'hesitez pas à jouez avec
            le temps pour prendre les meilleurs décisisons!</p>,
    worklist:
        <ul>
            <li className='sub-li'>Intégration d'assets et effets sonores.</li>
            <li className='sub-li'> Intégration et gestion de l'interface (hors dialogue).</li>
            <li className='sub-li'>Système de tourelle (placement, comportement, tir, upgrade)</li>
            <li className='sub-li'> Système de monnaie.</li>
        </ul>
}

export const EchoesData = {

    title: "Echoes Of Dawn",
    years: "1ère année",
    team: "4 programmeurs et 4 infographistes",
    langage: "C",
    resume:
        <p>Avancez dans un monde rempli d'ennemi, visitez, construisez les bâtiment nécessaire à votre progression
            pour
            améliorer votre équipement et être prêt à affronter l'ultime boss !
        </p>,
    worklist:
        <ul>
            <li className='sub-li'>Déplacements, animations, skills, attaque, récolte, son.</li>
            <li className='sub-li'>Une partie du système de loot et de son interface</li>
        </ul>
}

export const HyperbawlData = {
    title: "Hyperbawl",
    years: "2ème année",
    team: "5 programmeurs et 4 infographistes",
    langage: "C# (Moteur Unity)",
    resume: <p>
        Prenez part à un match d'hyperbawl, en multijoueur 3vs3, et remportez la victoire !
    </p>,
    first_part: 'Tutoriels pour apprendre les contrôles :',
    worklist:
        <ul>
            <li className='sub-li'>Déplacements</li>
            <li className='sub-li'>Course</li>
            <li className='sub-li'>Slide</li>
            <li className='sub-li'>WallRide</li>
        </ul>,
    second_part: 'Un tutoriel contre un IA qui peut :',
    second_list: <ul>
        <li className='sub-li'>Courir</li>
        <li className='sub-li'>Slider</li>
        <li className='sub-li'>Tacler</li>
        <li className='sub-li'>Esquiver</li>
        <li className='sub-li'>Réceptionner</li>
        <li className='sub-li'>Tirer</li>
        <li className='sub-li'>Marquer des biuts</li>

    </ul>
}

export const KiraData = {
    title: 'Kira',
    years: '3ème année',
    team: '5 programmeurs et 4 infographistes',
    langage: 'C++/Blueprint (Moteur UE4)',
    resume:
        <p>
            Incarnez Kira, un adorable chaton en quête d'aventure.<br />
            Explorez les lieux, discutez avec d'autres amis chats, accomplissez des quêtes et partez combattre vos pires
            ennemis lors de vos périple.
        </p>,
    worklist:
        <ul>
            <li className='sub-li'> Totalité de l'interface utilisateur</li>
            <li className='sub-li'>Arbre de compétences</li>
            <li className='sub-li'>HUD</li>
            <li className='sub-li'>Options</li>
            <li className='sub-li'>Sons d'interface</li>
        </ul>
}