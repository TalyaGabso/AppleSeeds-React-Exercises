import React from 'react';
import { Link } from 'react-router-dom'
import Homepage from './Homepage.component'
import Products from './Products.component'

class Header extends React.Component {

  render() {
    return (
        <ul className="nav">
        <Link to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/Products">
          <li className="nav-item">Shop</li>
        </Link>
      </ul>
    );
  };
};
export default Header;