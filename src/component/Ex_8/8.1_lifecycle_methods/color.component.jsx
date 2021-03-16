
import React from 'react';

class Color extends React.Component {
  state = { favoriteColor: 'orange', message:''};

  componentDidMount(){
    setTimeout(() => {
      this.setState({favoriteColor:'purple'});
      this.setState({message:`The updated favorite color is ${this.state.favoriteColor}`});
      console.log('call');
    }, 1000);
  };

  componentDidUpdate(){
    
  };
  render() {
    return (
      <div>
        <h1>my favorite color is {this.state.favoriteColor}</h1>
        <div>{this.state.message}</div>
      </div>
    );
  };
};
export default Color;