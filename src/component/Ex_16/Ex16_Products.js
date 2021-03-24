import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header.component";
import Homepage from "./Homepage.component";
import Products from "./Products.component";
import ProductDetail from './ProductDetail.component';
import './products.css'
function App() {
	return (
		<Router>
			<div>
				<Header/>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/Products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetail} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
