import React from "react";
import "./player.css";
import Score from "../common/Score";
import CurrentScore from "../common/CurrentScore";
class Player extends React.Component {
  render() {
    const { currentScore, totalScore } = this.props.data;
    return (
      <div className="player-card-wrap">
        <div className="player-card">
          <div className="player-score-wrap">
            <h2>{this.props.name}</h2>
            <Score total={totalScore} />
          </div>
          <CurrentScore total={currentScore} />
        </div>
      </div>
    );
  }
}

export default Player;
