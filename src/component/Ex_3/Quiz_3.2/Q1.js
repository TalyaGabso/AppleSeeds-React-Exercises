import React from 'react';
import Q1Title from './Q1Title'
import Q1Input from './Q1Input'

class Q1 extends React.Component{
  constructor(props){
    super(props);
  
  };
  render(){
    return (
    <div className="q1">
      <Q1Title/>
      <Q1Input/>
    </div>
    );
  };
};
export default Q1;