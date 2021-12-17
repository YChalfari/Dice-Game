import React from "react";

class Score extends React.Component {
  render() {
    return (
      <div className="score-wrap">
        <h3 className="score">{this.props.total}</h3>
      </div>
    );
  }
}

export default Score;
