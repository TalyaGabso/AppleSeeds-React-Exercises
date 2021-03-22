import React from "react";
import Data from "./DataList.component";
import Card from './Card.component'
import Name from './Name.component'
import './dataMessage.css'

class App extends React.Component {
	state = { data: Data };
	getName = () => {
		return this.state.data.map(user=> user.name);
	};
	getBefore1990 = () => {
		return this.state.data.filter(user=> parseInt(user.birthday.split("-")[2]) < 1990);
	};
	render() {
		return (
			<div>
        <h3>Users Names</h3>
				{this.getName().map(name => <Name name={name} key={name} />)}
        <h3>Users Details</h3>
				{this.getBefore1990().map(user =><Card user={user} key={user.name} />)}
			</div>
		);
	};
};
export default App;
