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
        isActive: true,
        currentScore: 0,
        totalScore: 0,
      },
      {
        isActive: false,
        currentScore: 0,
        totalScore: 0,
      },
    ],
  };
  updateActivePlayer = () => {
    const activeplayer = this.state.activePlayer;
    const playercount = this.state.players.length;
    const newActive =
      activeplayer + 1 <= playercount - 1 ? activeplayer + 1 : 0;
    let tempState = {
      ...this.state,
      players: [...this.state.players],
    };
    const { activePlayer, players } = tempState;
    const player = players[activePlayer];
    this.updateScore(player);
    player.isActive = !player.isActive;
    players[newActive].isActive = !players[newActive].isActive;
    tempState.activePlayer = newActive;
    console.log(tempState);

    return this.setState(
      (prev) => {
        return tempState;
      },
      () => console.log(this.state)
    );
  };
  updateScore = (player) => {
    player.totalScore += player.currentScore;
    player.currentScore = 0;
  };
  updateCurrScore = () => {};

  handleDiceRoll = () => {
    const randomRoll = () => Math.ceil(Math.random() * 6);
    let tempState = {
      ...this.state,
      players: [...this.state.players],
    };
    const roll1 = randomRoll();
    const roll2 = randomRoll();
    tempState.diceRolls.push(roll1, roll2);
    tempState.diceRolls.splice(0, 2);
    // tempState.diceRolls = [roll1,roll2]
    tempState.players[this.state.activePlayer].currentScore += roll1 + roll2;

    return this.setState(tempState, () => console.log(this.state));
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
            <Button
              onClick={this.updateActivePlayer}
              text="Hold"
              img="hand-paper"
            />
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
