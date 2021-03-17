import React, { Component } from 'react';
import './style.css'
class CustomButton extends Component {
  state = { color: this.props.color }

  render() {
    return (
      <button style={{ backgroundColor: this.state.color }} 
      onClick={() => this.props.onClick(this.state.color)}>
        {this.state.color}</button>
    );
  }
}

export default CustomButton;
