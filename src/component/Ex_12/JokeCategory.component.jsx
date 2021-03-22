import React from 'react';
import axios from 'axios';

export default class JokeCategory extends React.Component {
  state = { categories: [], categoryJoke: '' }

  componentDidMount = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    console.log(response.data);
    this.setState({ categories: response.data })
  }

  getJokeByCategory = async (e) => {
    const category = e.target.value
    console.log('category:',category);
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    this.setState({ categoryJoke: response.data.value })
  }

  render() {
    return <>
      <select name="categories" onChange={this.getJokeByCategory}>
        {this.state.categories.map(value => <option value={value}>{value}</option>)}
      </select>
      <p>{this.state.categoryJoke}</p>
    </>
  }
};
