import React from "react";

class CurrentScore extends React.Component {
  render() {
    return (
      <div className="curr-score-wrap">
        <h4>current:</h4>
        <h3 className="curr-score">{this.props.total}</h3>
      </div>
    );
  }
}

export default CurrentScore;
