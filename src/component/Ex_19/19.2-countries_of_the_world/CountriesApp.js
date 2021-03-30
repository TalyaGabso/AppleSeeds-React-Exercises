import axios from "axios";
import React, { useEffect, useState } from "react";

const CountriesApp = () => {
	const [countries, setCountries] = useState([]);
	const [input, setInput] = useState("");

	const getCountries = async () => {
		const require = await axios.get("https://restcountries.eu/rest/v2/all");
		setCountries(require.data);
	};

	const countryInput = (input) => {
		setInput(input.charAt(0).toUpperCase() + input.slice(1));
	};

	useEffect(() => {
    console.log(countries);
		getCountries();
	}, []);

	return (
		<div>
			<input
				type="text"
				name="countryToSearch"
				onChange={(e) => countryInput(e.target.value)}
				placeholder="Enter country"
			/>
			{countries
				.filter((country) => country.name.startsWith(input))
				.map((country) => (
					<p key={country.alpha2Code}>{country.name}</p>
				))}
		</div>
	);
};
export default CountriesApp;
