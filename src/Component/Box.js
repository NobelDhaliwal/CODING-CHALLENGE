import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  // Handler callback
  handleChangeColor() {
    // Call parent component changeColor  method passing the color value of div
    this.props.changeColor(this.props.color);
  }

  render() {
    return (
      <div
        //  click handler to the div and pass a callback
        onClick={this.handleChangeColor}
        style={{
          backgroundColor: this.props.color,
          width: "75px",
          height: "600px",
        }}
      />
    );
  }
}

export default Box;
