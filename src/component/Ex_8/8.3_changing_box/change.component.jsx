import React from 'react';

const colors = ['#535c68', '#95afc0', '#c7ecee', '#dff9fb', '#7ed6df']

class Change extends React.Component {
  state = { color: 0, shape: '' };

  componentDidMount() {
    setInterval(() => {

      if(this.state.color>3){
        this.setState({
          color: (this.state.color +1)%5, borderRadius: this.state.shape = '50%',
        })
      }else{
      this.setState({
        color: (this.state.color + 1),
      })}
    }, 500);
  }
  render() {
    return (
      <div style={{
        backgroundColor: colors[this.state.color],
        borderRadius: this.state.shape,
        width: '100px',
        height: '100px'
      }}></div>
    )
  };
};
export default Change