import React from "react";
import "./button.css";
class Button extends React.Component {
  render() {
    return (
      <div className="btn-wrap">
        <div onClick={this.props.onClick} className="btn">
          <i className={`fas fa-${this.props.img} `}></i>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}

export default Button;
