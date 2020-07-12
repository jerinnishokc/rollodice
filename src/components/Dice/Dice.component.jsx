import React from 'react';
import './Dice.styles.scss';

const Dice = (props) => {
    console.log('rendered');
    return <i className={`fas fa-dice-${props.dots} dice ${props.isRolling ? 'roll' : null}`}></i>;
};

export default Dice;