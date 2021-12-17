import React from "react";
import GameBoard from "../components/GameBoard";
class Die extends React.Component {
  render() {
    return (
      <h2>
        {this.props.value ? this.props.value : Math.ceil(Math.random() * 6)}
      </h2>
    );
  }
}

export default Die;
