import React from "react";
import Q2Title from "./Q2Title";
import Q2Input from "./Q2Input";

class Q2 extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='"q2'>
				<Q2Title />
				<Q2Input />
			</div>
		);
	}
}
export default Q2;
