import React from 'react';

class Q1Input extends React.Component{
  constructor(props){
    super(props);
  
  };
  render(){
    return <input type="range" id="points" min="0" max="10"/>
  };
};
export default Q1Input;