import React from 'react';
import { Link } from "react-router-dom";

import Products from './Products.component'
import store from './store';

class ProductDetail extends React.Component {
  render() {
    const product = store[this.props.match.params.id - 1]
    console.log("product: ", this.props.match);
    return (
      <div>
        <div className="product-details">
          <h3>{product.title}</h3>
          <p className="product-description">${product.price}</p>
          <p className="product-description">{product.size}</p>
          <img className="product-img" src={product.imageUrl} />
          <Link to="/Products">
            <input type="button" value="Back" className="back-btn"/>
          </Link>
        </div>
      </div>
    );
  }
}
export default ProductDetail;