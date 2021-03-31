import React, { useState, useEffect } from "react";
import axios from "axios";

const ChuckNorrisHooks = () => {
	const [joke, setJoke] = useState("");
	const [categories, setCategories] = useState([]);
	const [jokeBycategories, setJokeBycategories] = useState("");

  const myJoke = async () => {
    const require = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    console.log(require.data);
    setCategories(require.data);
  };
	const getNewJoke = () => {
		(async () => {
			const newJoke = await axios.get("https://api.chucknorris.io/jokes/random");
			setJoke(newJoke.data.value);
		})();
	};
  
	const getJokeByCategory = async (e) => {
    const category = e.target.value;
		console.log(category);
		const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      console.log(response.data.value);
      setJokeBycategories(response.data.value);
    };
    
      useEffect(() => {
        myJoke();
      }, []);

	return (
		<div>
			<button onClick={getNewJoke}>Get This Joke</button>
			<p>{joke}</p>

			<select name="categories" onChange={getJokeByCategory}>
				{categories.map((value) => {
					return (
						<option key={value} value={value}>
							{value}
						</option>
					);
				})}
			</select>
			<p>{jokeBycategories}</p>
		</div>
	);
};

export default ChuckNorrisHooks;
