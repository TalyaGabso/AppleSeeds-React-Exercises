import React from 'react';
class UserCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="user-img"
          src={this.props.avatar}
          alt={this.props.name}
        />
        <div className='user-name'>{this.props.name} {this.props.lastName}</div>
      </div>
    );
  }
}
export default UserCard