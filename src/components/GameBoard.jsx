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
        name: "Player 1",
      },
      {
        isActive: false,
        currentScore: 0,
        totalScore: 0,
        name: "Player 2",
      },
    ],
  };

  componentDidUpdate() {
    if (
      this.state.players[this.state.activePlayer].name === "ai" &&
      !this.state.winner
    ) {
      setTimeout(() => this.handleDiceRoll(), 500);
    }
  }
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

    return this.setState((prev) => {
      return tempState;
    });
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
    return this.setState(tempState);
  };
  handleChange = (e) => {
    this.setState({ pointsToWin: e.target.value });
  };
  handleNewGame = (id) => {
    const temp = {
      pointsToWin: 100,
      diceRolls: [null, null],
      activePlayer: 0,
      winner: false,
      players: [
        {
          isActive: true,
          currentScore: 0,
          totalScore: 0,
          name: "Player 1",
        },
        {
          isActive: false,
          currentScore: 0,
          totalScore: 0,
          name: "Player 2",
        },
      ],
    };
    if (id === "ai") {
      temp.players[1].name = id;
    }
    this.setState(temp, console.log(temp, this.state));
  };
  render() {
    const { players, activePlayer } = this.state;
    const player = players[activePlayer];
    return (
      <div className="game-board">
        <Player name={players[0].name} data={this.state.players[0]} />
        <div className="control-panel">
          <Button
            onClick={this.handleNewGame}
            text="New Game"
            img="plus-square"
            id="new"
          />
          <Button onClick={this.handleNewGame} text="AI" img="robot" id="ai" />
          {this.state.winner ? (
            <VictoryScreen
              winner={player.name}
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
                  id="dice"
                  // isEnabled={this.state.winner && "disabled"}
                />
                <Button
                  onClick={this.state.winner ? null : this.updateActivePlayer}
                  text="Hold"
                  img="hand-paper"
                  id="hold"
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
        <Player name={players[1].name} data={this.state.players[1]} />
      </div>
    );
  }
}

export default GameBoard;
