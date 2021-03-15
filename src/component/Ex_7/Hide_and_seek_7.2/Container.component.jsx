import React, { Component } from 'react'
import './container.css'
class Container extends Component {
  constructor() {
    super();
    this.state = { display: "block" };
  };

  changeDisplay = () => {
    if (this.state.display === "block") {
      this.setState({ display: "none" })
    } else {
      this.setState({ display: "block" })
    };
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.changeDisplay}> show / hide </button>
        <div style={{ display: this.state.display }} className="box"></div>
      </div>
    );
  };
};

export default Container;