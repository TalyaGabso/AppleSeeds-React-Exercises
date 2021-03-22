import React, { createRef } from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}
	componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		return (
			<form
				style={{
					border: "2px solid black",
					width: "150px",
					height: "100px",
					padding: "15px",
					margin: "auto",
					textAlign: "center",
				}}>
				<label htmlFor="username">username: </label>
				<input
					ref={this.inputRef}
					type="text"
					id="username"
					name="username"
					style={{ width: "fit-content", padding: "2px" }}
				/>
				<br />
				<input
					type="submit"
					value="Submit"
					style={{ width: "fit-content", margin: "15px" }}
				/>
			</form>
		);
	}
}
export default App;
