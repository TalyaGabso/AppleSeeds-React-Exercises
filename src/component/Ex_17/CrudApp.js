import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";

import Users from "./Users.component";
// import Homepage from "./Homepage.component";
// import Create from "./Create.component";
// import Update from "./Update.component";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>CRUD App</h1>
				<Users />
			</div>
		);
	};
};