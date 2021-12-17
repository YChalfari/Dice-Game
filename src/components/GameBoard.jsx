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
  handleChange = (e) => {
    this.setState({ pointsToWin: e.target.value }, () =>
      console.log(e.target.value)
    );
  };
  render() {
    return (
      <div className="game-board">
        <Player name="Player 1" />
        <div className="control-panel">
          <Button text="New Game" img="plus-square" />
          <div className="dice-container">
            <Die />
            <Die />
          </div>
          <div className="button-container">
            <Button text="Roll Dice" img="dice" />
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
        <Player name="Player 2" />
      </div>
    );
  }
}

export default GameBoard;
