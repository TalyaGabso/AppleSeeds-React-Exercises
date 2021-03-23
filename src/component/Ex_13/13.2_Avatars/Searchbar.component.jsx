import React from 'react';
class SearchBar extends React.Component {
  
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} placeholder="Search Filter"/>
  }
}
export default SearchBar