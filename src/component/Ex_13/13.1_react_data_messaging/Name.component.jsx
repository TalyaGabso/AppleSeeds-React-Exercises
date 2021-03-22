import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div className="users">
        {this.props.name}
      </div>
    );
  };
};

export default Name;
