import React from 'react';
import '../styles/about.scss'

const Logo = (props) => {

    const img = props.img;
    const name = props.name;
    return (
        <div className="logo">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Logo;