import React from "react";
import "./player.css";
import Score from "../common/Score";
import CurrentScore from "../common/CurrentScore";
class Player extends React.Component {
  render() {
    const { currentScore, totalScore, isActive } = this.props.data;
    return (
      <div
        className={isActive ? "player-card-wrap active" : "player-card-wrap"}
      >
        <div className="player-card">
          <div className="player-score-wrap">
            <h2 className="player-name">
              {this.props.name}
              <i className={isActive ? "fas fa-angle-left" : undefined}></i>
            </h2>
            <Score total={totalScore} />
          </div>
          <CurrentScore total={currentScore} />
        </div>
      </div>
    );
  }
}

export default Player;
