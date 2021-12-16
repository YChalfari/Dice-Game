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
  render() {
    return (
      <div className="game-board">
        <Player />
        <div className="control-panel">
          <Button />
          <div className="dice-container">
            <Die />
            <Die />
          </div>
          <Button />
          <Button />
        </div>
        <Player />
      </div>
    );
  }
}

export default GameBoard;
