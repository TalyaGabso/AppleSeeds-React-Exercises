import React from 'react';

class Card extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return (
    <div className="card">
      <img src={this.props.source} alt={this.props.title} />
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
      <a href={this.props.share}>Share</a>
      <br />
      <a href={this.props.explore}>Explore</a>
    </div>
    );
  };
};
export default Card;