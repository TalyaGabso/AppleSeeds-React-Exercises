import React from 'react';
import { Link } from "react-router-dom";

import store from './store';

class Products extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: store });
  };
  render() {
    return (
      <div className="products-display">
        {this.state.data.map(product => (
          <Link to={`/Products/${product.id}`} key={product.id} className="product">
            {product.title}
          </Link>
        ))
        }
      </div>
    );
  };
};
export default Products;