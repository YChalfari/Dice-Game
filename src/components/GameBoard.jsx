import React from "react";
import Player from "./Player";
import Button from "../common/Button";
import Die from "../common/Die";
import "./gameboard.css";

class GameBoard extends React.Component {
  state = {
    pointsToWin: 100,
    diceRolls: [null, null],
    activePlayer: 0,
    winner: false,
    players: [
      {
        currentScore: 0,
        totalScore: 0,
      },
      {
        currentScore: 0,
        totalScore: 0,
      },
    ],
  };
  updateCurrScore = () => {};
  handleDiceRoll = () => {
    const randomRoll = () => Math.ceil(Math.random() * 6);
    this.setState({ diceRolls: [randomRoll(), randomRoll()] }, () => {
      const roll1 = this.state.diceRolls[0];
      const roll2 = this.state.diceRolls[1];
      this.setState((prev) => {
        let tempState = {
          ...prev,
          players: [...prev.players],
        };
        tempState.players[this.state.activePlayer].currentScore = roll1 + roll2;
        return tempState;
      });
    });
  };
  handleChange = (e) => {
    this.setState({ pointsToWin: e.target.value });
  };
  render() {
    return (
      <div className="game-board">
        <Player name="Player 1" data={this.state.players[0]} />
        <div className="control-panel">
          <Button text="New Game" img="plus-square" />
          <div className="dice-container">
            <Die value={this.state.diceRolls[0]} />
            <Die value={this.state.diceRolls[1]} />
          </div>
          <div className="button-container">
            <Button onClick={this.handleDiceRoll} text="Roll Dice" img="dice" />
            <Button text="Hold" img="hand-paper" />
            <label htmlFor="limit">Set Score Limit</label>
            <input
              onChange={this.handleChange}
              value={this.state.pointsToWin}
              type="text"
              name="limit"
              id="limit"
            />
          </div>
        </div>
        <Player name="Player 2" data={this.state.players[1]} />
      </div>
    );
  }
}

export default GameBoard;
