import React from "react";
import "./player.css";
import Score from "../common/Score";
import CurrentScore from "../common/CurrentScore";
class Player extends React.Component {
  render() {
    return (
      <div className="player-card-wrap">
        <div className="player-card">
          <h2>Player 1</h2>
          <Score />
          <CurrentScore />
        </div>
      </div>
    );
  }
}

export default Player;
