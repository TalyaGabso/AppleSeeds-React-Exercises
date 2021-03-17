import React from "react";
import CustomButton from "./CustomButton.component";

const colors = ["blue", "red", "yellow"];

class ParentColor extends React.Component {
	state = { color: "" };

	onSelectColor(color) {
		this.setState({ color: color });
	}

	render() {
		return (
			<div>
				{colors.map((color) => (
					<CustomButton
						key={color}
						color={color}
						onClick={(color) => this.onSelectColor(color)}
					/>
				))}
				<h1>The Color Selected is: {this.state.color}</h1>
			</div>
		);
	}
}

export default ParentColor;
