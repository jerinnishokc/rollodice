import React from 'react';
import Dice from '../../components/Dice/Dice.component';
import './RollDice.styles.scss';

class RollDice extends React.Component {
    state = {
        die1: 'one',
        die2: 'two',
        lookup: {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six'
        },
        isRolling: false
    };

    rollDice = () => {
        this.setState({isRolling: !this.state.isRolling});
        const randomNumber1 = this.state.lookup[Math.floor(Math.random() * 6) + 1];
        const randomNumber2 = this.state.lookup[Math.floor(Math.random() * 6) + 1];
        this.setState({
            die1: randomNumber1,
            die2: randomNumber2
        });
        setTimeout(() => this.setState({isRolling: !this.state.isRolling}), 2000);
    };

    render() {
        return (
            <div className="rolldice-container">
                <h2 className="title">RollDice</h2>
                <div className="dice-holder">
                    <Dice dots={this.state.die1} isRolling={this.state.isRolling}></Dice>
                    <Dice dots={this.state.die2} isRolling={this.state.isRolling}></Dice>
                </div>
                <div className="button-container" >
                    <button onClick={this.rollDice} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling' : 'Roll the dice'}</button>
                </div>
            </div>
        );
    }
};

export default RollDice;