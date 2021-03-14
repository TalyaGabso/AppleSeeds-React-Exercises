// import libaries
import React from "react";

// create component
const data = ["hello", "world"];
const string = "I love React!";
const number1 = 5;
const number2 = 6;

const App = () => {
	return (
		<div>
			<p>{data[0]} {data[1]}</p>
			<p>{number1}+{number2} = {number1 + number2}</p>
			<p>The string’s length is {string.length}</p>
		</div>
	);
};
export default App


