import axios from "axios";
import React, { useState, useEffect } from "react";

const SimpleFetchApp = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const movieData = async () => {
			const result = await axios.get("https://swapi.dev/api/films/1/");
			setData(result.data);
		};
		movieData();
	}, []);

	return (
		<div>
			<p>Title : {data.title}</p>
      <p>Director: {data.director}</p>
		</div>
	);
};

export default SimpleFetchApp;
