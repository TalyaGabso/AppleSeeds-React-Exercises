import React, { useState, useEffect } from "react";
import axios from "axios";

const AlogoliaApiApp = () => {
	const [data, setData] = useState(null);
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("hooks");

	const getData = async () => {
		console.log(search);
		const require = await axios.get(
			`https://hn.algolia.com/api/v1/search?query=${search}`
		);
		console.log("require.data: ", require.data);
		console.log("require.data.hits: ", require.data.hits);
		setData(require.data.hits);
	};

	const inputSearch = (input) => {
		setInput(input);
	};

	const newSearch = () => {
		setSearch(input);
	};

	useEffect(() => {
		getData();
	}, [search]);

	return (
		<div>
			{data === null ? (
				<div>Loading...</div>
			) : (
				<div>
					<input
						type="text"
						onChange={(e) => inputSearch(e.target.value)}
					/>
					<input type="button" value="Search" onClick={newSearch} />
					<ul>
						{data.map((query, index) => (
							<li key={index}>
								<a href={query.url}>{query.title}</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default AlogoliaApiApp;
