import React from "react";
import "./player.css";
import Score from "../common/Score";
import CurrentScore from "../common/CurrentScore";
class Player extends React.Component {
  render() {
    return (
      <div className="player-card-wrap">
        <div className="player-card">
          <div className="player-score-wrap">
            <h2>{this.props.name}</h2>
            <Score />
          </div>
          <CurrentScore />
        </div>
      </div>
    );
  }
}

export default Player;
