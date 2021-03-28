import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Users extends Component {
  state = { users: [] }
  componentDidMount() {
    // this.setState{ (users:)}
  }
  render() {
    return (
      <div className="card">
        <p>id : {this.state.users.id}</p>
        <p>name : {this.state.users.name}</p>
      </div>
    )
  }
}
