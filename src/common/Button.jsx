import React from "react";
import "./button.css";
class Button extends React.Component {
  handleClick(id) {
    this.props.onClick(id);
  }
  render() {
    return (
      <div className="btn-wrap">
        <div
          id={this.props.id}
          onClick={() => this.handleClick(this.props.id)}
          className="btn"
          // {...this.props.isEnabled}
        >
          <i className={`fas fa-${this.props.img} `}></i>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}

export default Button;
