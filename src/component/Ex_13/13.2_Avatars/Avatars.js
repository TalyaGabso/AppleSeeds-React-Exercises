import React from "react";
import axios from "axios";
import SearchBar from "./Searchbar.component";
import UserCard from "./UserCard.component";
import './avatar.css'

class App extends React.Component {
	state = {
		search: "",
		users: [],
	};

	async componentDidMount() {
		const response = await axios.get("https://randomuser.me/api/?results=10");
		this.setState({
			users: response.data.results.map((user) => {
				return {
					name: user.name.first,
					lastName: user.name.last,
					avatar: user.picture.large,
				};
			}),
		});
		console.log(this.state.users);
	}

	onInputChange(e) {
		this.setState({ search: e.target.value });
		console.log(this.state.search);
	}

	render() {
		return (
			<div>
				<SearchBar
					value={this.state.value}
					onChange={(e) => this.onInputChange(e)}
				/>
				<div className="card-container">
					{this.state.users
						.filter((user) =>
							user.name
								.toLowerCase()
								.includes(this.state.search.toLowerCase())
						)
						.map((user) => (
							<UserCard
								name={user.name}
								lastName={user.lastName}
								avatar={user.avatar}
							/>
						))}
				</div>
			</div>
		);
	}
}
export default App;
