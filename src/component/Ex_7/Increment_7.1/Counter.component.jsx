import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super();

		this.state = { counter: 0 };
	};
	increase = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<div>
				<button id="btn" onClick={this.increase}>increment</button>
				<lable htmlFot="btn"> {this.state.counter} </lable>
			</div>
		);
	};
};

export default Counter;
