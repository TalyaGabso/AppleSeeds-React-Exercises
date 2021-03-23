import React from "react";

class Copy extends React.Component {
	inputRef = React.createRef();

	copy = () => {
		this.inputRef.current.select();
		document.execCommand("copy");
		document.execCommand("delete");
	};

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "200px",
				}}>
				
        <textarea
					name="textarea"
					rows="3"
					cols="70"
					ref={this.inputRef}
					style={{
						marginBottom: "5px",
						padding: "5px",
            boxShadow: "0 0 2px 1px rgba(1, 25, 32, 0.5)",
					}}></textarea>
				
        <button
					onClick={this.copy}
					style={{
						margin: "0px",
						width: "fit-content",
						height: "fit-content",
						padding: "5px",
						border: "2px solid black",
						fontWeight: "bold",
						fontSize: "1rem",
					}}>
					copy
				</button>
			</div>
		);
	}
}
export default Copy;
