import React from "react";

class VictoryScreen extends React.Component {
  render() {
    return (
      <div className="win-screen">
        <h2 className="victory-title">{`${this.props.winner}, you lucky doge!`}</h2>
        <h4>{`${this.props.winner} won with ${this.props.score} points`}</h4>
        <p>click new game to try your luck again</p>
      </div>
    );
  }
}
export default VictoryScreen;
