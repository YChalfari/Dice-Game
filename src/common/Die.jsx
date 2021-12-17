import React from "react";
import dice_1 from "../images/dice-1.png";
import dice_2 from "../images/dice-2.png";
import dice_3 from "../images/dice-3.png";
import dice_4 from "../images/dice-4.png";
import dice_5 from "../images/dice-5.png";
import dice_6 from "../images/dice-6.png";

class Die extends React.Component {
  images = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

  render() {
    const { value } = this.props;
    return (
      <img
        className="die"
        src={
          value
            ? this.images[value - 1]
            : this.images[Math.ceil(Math.random() * 6) - 1]
        }
        alt="die"
      />
    );
  }
}

export default Die;
