import React from 'react';
const GameTemplate = (data) => {
    const hasSecondPart = data.second_part;
    const GetWorklist = () => {
        if (hasSecondPart) {
            return (
                <>
                    <h2>{data.first_part}</h2>
                    {data.worklist}
                    <h2>{data.second_part}</h2>
                    {data.second_list}
                </>
            );
        }
        else {
            return (
                <>{data.worklist}</>
            );
        }
    }

    return (


        <div className="description">
            <h1><span>Projet étudiant</span></h1>
            <h2>{data.years}</h2>
            <ul>
                <li><span>Durée de développement</span> : 3 mois</li>
                <li><span>Equipe</span> : {data.team}</li>
                <li><span>Language</span> : {data.langage}</li><br /><br />
            </ul>
            <h1><span>Résumé</span></h1>
            {data.resume}
            <br /><br />

            <h1><span>Ma part de travail</span></h1>
            {GetWorklist()}
        </div>

    );
};

export default GameTemplate;