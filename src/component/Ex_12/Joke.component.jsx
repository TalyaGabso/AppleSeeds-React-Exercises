import React from 'react';
import axios from 'axios';

export default class Joke extends React.Component {
  state = { joke: '' };

  getJoke=async()=> {
    const request = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(request)
    console.log(request.data.value)
    this.setState({ joke: request.data.value });
  }
  render() {
    return <>
      <input type="button" value="Get New Joke" onClick={this.getJoke} />
      <p> {this.state.joke} </p>
    </>
  }
};
