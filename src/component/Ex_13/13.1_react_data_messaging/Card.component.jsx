import React from 'react';

class Card extends React.Component{
  state={user: this.props.user}

  render(){
    return(
      <div className="card">
        <p>Name: {this.state.user.name}</p>
        <p>Birthday: {this.state.user.birthday}</p>
        <p>Favorite Food:</p>
        <p>{this.state.user.favoriteFoods.meats.join(', ')}, {this.state.user.favoriteFoods.fish.join(', ')}</p>
      </div>
    );
  };
};
export default Card;