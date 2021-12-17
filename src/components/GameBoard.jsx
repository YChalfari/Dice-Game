import React from "react";
import Player from "./Player";
import Button from "../common/Button";
import Die from "../common/Die";
import "./gameboard.css";
import VictoryScreen from "./VictoryScreen";

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
  updateActivePlayer = (obj) => {
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
    const { players, diceRolls, activePlayer, pointsToWin } = tempState;
    const player = players[activePlayer];
    const roll1 = randomRoll();
    const roll2 = randomRoll();
    diceRolls.push(roll1, roll2);
    diceRolls.splice(0, 2);
    // tempState.diceRolls = [roll1,roll2]
    if (roll1 === roll2) {
      const activeplayer = this.state.activePlayer;
      const playercount = this.state.players.length;
      const newActive =
        activeplayer + 1 <= playercount - 1 ? activeplayer + 1 : 0;
      player.currentScore = player.totalScore = 0;
      player.isActive = !player.isActive;
      players[newActive].isActive = !players[newActive].isActive;
      tempState.activePlayer = newActive;
    } else {
      player.currentScore += roll1 + roll2;
      player.currentScore + player.totalScore >= pointsToWin &&
        (tempState.winner = true);
    }

    return this.setState(tempState, () => console.log(this.state));
  };
  handleChange = (e) => {
    this.setState({ pointsToWin: e.target.value });
  };
  handleNewGame = () => {
    this.setState({
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
    });
  };
  render() {
    const { players, activePlayer } = this.state;
    const player = players[activePlayer];
    return (
      <div className="game-board">
        <Player name="Player 1" data={this.state.players[0]} />
        <div className="control-panel">
          <Button
            onClick={this.handleNewGame}
            text="New Game"
            img="plus-square"
          />
          {this.state.winner ? (
            <VictoryScreen
              winner={`Player ${activePlayer + 1}`}
              score={player.totalScore + player.currentScore}
            />
          ) : (
            <div className="">
              <div className="dice-container">
                <Die value={this.state.diceRolls[0]} />
                <Die value={this.state.diceRolls[1]} />
              </div>
              <div className="button-container">
                <Button
                  onClick={this.state.winner ? null : this.handleDiceRoll}
                  text="Roll Dice"
                  img="dice"
                  // isEnabled={this.state.winner && "disabled"}
                />
                <Button
                  onClick={this.state.winner ? null : this.updateActivePlayer}
                  text="Hold"
                  img="hand-paper"
                  // isEnabled={this.state.winner && "disabled"}
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
          )}
        </div>
        <Player name="Player 2" data={this.state.players[1]} />
      </div>
    );
  }
}

export default GameBoard;
